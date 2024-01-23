<script lang="ts">
  import { UIEventSource } from "../../Logic/UIEventSource"
  import type { Feature } from "geojson"
  import Translations from "../i18n/Translations"
  import Loading from "../Base/Loading.svelte"
  import Hotkeys from "../Base/Hotkeys"
  import { PhotonGeocoding } from "../../Logic/Osm/Geocoding/PhotonGeocoding"
  import { BBox } from "../../Logic/BBox"
  import { GeoIndexedStoreForLayer } from "../../Logic/FeatureSource/Actors/GeoIndexedStore"
  import { createEventDispatcher, onDestroy } from "svelte"
  import { placeholder } from "../../Utils/placeholder"
  import { SearchIcon } from "@rgossiaux/svelte-heroicons/solid"
  import { ariaLabel } from "../../Utils/ariaLabel"
  import type { GeoCodeResult } from "../../Logic/Osm/Geocoding/GeocodingProvider"

  export let perLayer: ReadonlyMap<string, GeoIndexedStoreForLayer> | undefined = undefined
  export let bounds: UIEventSource<BBox>
  export let selectedElement: UIEventSource<Feature> | undefined = undefined

  export let clearAfterView: boolean = true

  export let autoComplete: boolean = true

  let searchContents: string = ""
  export let triggerSearch: UIEventSource<any> = new UIEventSource<any>(undefined)
  onDestroy(
    triggerSearch.addCallback((_) => {
      performSearch()
    })
  )

  let isRunning: boolean = false

  let inputElement: HTMLInputElement

  let popupElement: HTMLDivElement

  let feedback: string = undefined

  const photon = new PhotonGeocoding()

  function focusOnSearch() {
    requestAnimationFrame(() => {
      inputElement?.focus()
      inputElement?.select()
    })
  }
  // UIEventSource for autocomplete results
  let autocompleteResultsStore = new UIEventSource<GeoCodeResult[]>([])

  // Map UIEventSource items to normal array
  let autocompleteResults: { name: string; value: string; id: string }[] = []
  autocompleteResultsStore.subscribe((_) => {
    console.log("Autocomplete results changed")
    autocompleteResults = autocompleteResultsStore.data.map((r) => {
      return {
        name: r.name,
        value: r.name,
        id: `${r.osm_type}/${r.osm_id}`,
      }
    })
  })

  Hotkeys.RegisterHotkey({ ctrl: "F" }, Translations.t.hotkeyDocumentation.selectSearch, () => {
    feedback = undefined
    focusOnSearch()
  })

  const dispatch = createEventDispatcher<{ searchCompleted; searchIsValid: boolean }>()
  $: {
    if (!searchContents?.trim()) {
      dispatch("searchIsValid", false)
    } else {
      dispatch("searchIsValid", true)
    }
  }

  async function performSearch() {
    try {
      isRunning = true
      searchContents = searchContents?.trim() ?? ""

      if (searchContents === "") {
        return
      }
      // Determine center point from bbox
      const bias = bounds.data.getCenter()
      const result = await photon.Search(searchContents, undefined, bias)
      if (result.length == 0) {
        feedback = Translations.t.general.search.nothing.txt
        focusOnSearch()
        return
      }
      const poi = result[0]

      bounds.set(getBoundingBox(poi))

      if (perLayer !== undefined) {
        const id = poi.osm_type + "/" + poi.osm_id
        const layers = Array.from(perLayer?.values() ?? [])
        for (const layer of layers) {
          const found = layer.features.data.find((f) => f.properties.id === id)
          if (found === undefined) {
            continue
          }
          selectedElement?.setData(found)
          console.log("Found an element that probably matches:", selectedElement?.data)
          break
        }
      }
      if (clearAfterView) {
        searchContents = ""
      }
      dispatch("searchIsValid", false)
      dispatch("searchCompleted")
    } catch (e) {
      console.error(e)
      feedback = Translations.t.general.search.error.txt
      focusOnSearch()
    } finally {
      isRunning = false
    }
  }

  async function handleKeypress(keypr) {
    feedback = undefined
    if (keypr.key === "Enter") {
      performSearch()
    } else {
      if (autoComplete && searchContents.length > 1) {
        // Send search request to autocomplete function
        photon.Autocomplete(
          searchContents + keypr.key,
          autocompleteResultsStore,
          undefined,
          bounds.data.getCenter()
        )
      }
    }
  }

  function getBoundingBox(poi: GeoCodeResult): BBox {
    if (poi.extent !== undefined) {
      const extent = poi.extent

      return new BBox([
        [extent[0], extent[1]],
        [extent[2], extent[3]],
      ]).pad(0.01)
    } else {
      const [lon, lat] = poi.location
      return new BBox([
        [lon, lat],
        [lon, lat],
      ]).pad(0.01)
    }
  }
</script>

<div class="normal-background flex justify-between rounded-full pl-2">
  <form class="flex w-full flex-wrap">
    {#if isRunning}
      <Loading>{Translations.t.general.search.searching}</Loading>
    {:else}
      <input
        type="search"
        class="w-full border-none outline-none"
        bind:this={inputElement}
        on:keypress={handleKeypress}
        bind:value={searchContents}
        use:placeholder={Translations.t.general.search.search}
        use:ariaLabel={Translations.t.general.search.search}
        list="autocompleteResults"
      />
      {#if feedback !== undefined}
        <!-- The feedback is _always_ shown for screenreaders and to make sure that the searchfield can still be selected by tabbing-->
        <div class="alert" role="alert" aria-live="assertive">
          {feedback}
        </div>
      {/if}
    {/if}
    <datalist id="autocompleteResults">
      {#each autocompleteResults as result}
        <option value={result.value}>{result.name}</option>
      {/each}
    </datalist>
  </form>
  <SearchIcon aria-hidden="true" class="h-6 w-6 self-end" on:click={performSearch} />
</div>
