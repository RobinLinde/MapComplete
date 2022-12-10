import UserRelatedState from "./UserRelatedState"
import {Store, Stores, UIEventSource} from "../UIEventSource"
import BaseLayer from "../../Models/BaseLayer"
import LayoutConfig from "../../Models/ThemeConfig/LayoutConfig"
import AvailableBaseLayers from "../Actors/AvailableBaseLayers"
import Attribution from "../../UI/BigComponents/Attribution"
import Minimap, {MinimapObj} from "../../UI/Base/Minimap"
import {Tiles} from "../../Models/TileRange"
import BaseUIElement from "../../UI/BaseUIElement"
import FilteredLayer, {FilterState} from "../../Models/FilteredLayer"
import TilesourceConfig from "../../Models/ThemeConfig/TilesourceConfig"
import {QueryParameters} from "../Web/QueryParameters"
import ShowOverlayLayer from "../../UI/ShowDataLayer/ShowOverlayLayer"
import {FeatureSourceForLayer, Tiled} from "../FeatureSource/FeatureSource"
import SimpleFeatureSource from "../FeatureSource/Sources/SimpleFeatureSource"
import {LocalStorageSource} from "../Web/LocalStorageSource"
import {GeoOperations} from "../GeoOperations"
import TitleHandler from "../Actors/TitleHandler"
import {BBox} from "../BBox"
import LayerConfig from "../../Models/ThemeConfig/LayerConfig"
import {TiledStaticFeatureSource} from "../FeatureSource/Sources/StaticFeatureSource"
import {Translation, TypedTranslation} from "../../UI/i18n/Translation"
import {Tag} from "../Tags/Tag"
import {OsmConnection} from "../Osm/OsmConnection"
import {Feature, LineString} from "geojson"
import {OsmTags} from "../../Models/OsmFeature"

export interface GlobalFilter {
    filter: FilterState
    id: string
    onNewPoint: {
        safetyCheck: Translation
        confirmAddNew: TypedTranslation<{ preset: Translation }>
        tags: Tag[]
    }
}

/**
 * Contains all the leaflet-map related state
 */
export default class MapState extends UserRelatedState {
    /**
     The leaflet instance of the big basemap
     */
    public leafletMap = new UIEventSource<any /*L.Map*/>(undefined, "leafletmap")
    /**
     * A list of currently available background layers
     */
    public availableBackgroundLayers: Store<BaseLayer[]>

    /**
     * The current background layer
     */
    public backgroundLayer: UIEventSource<BaseLayer>
    /**
     * Last location where a click was registered
     */
    public readonly LastClickLocation: UIEventSource<{
        lat: number
        lon: number
    }> = new UIEventSource<{ lat: number; lon: number }>(undefined)

    /**
     * The bounds of the current map view
     */
    public currentView: FeatureSourceForLayer & Tiled
    /**
     * The location as delivered by the GPS
     */
    public currentUserLocation: SimpleFeatureSource

    /**
     * All previously visited points, with their metadata
     */
    public historicalUserLocations: SimpleFeatureSource
    /**
     * The number of seconds that the GPS-locations are stored in memory.
     * Time in seconds
     */
    public gpsLocationHistoryRetentionTime = new UIEventSource(
        7 * 24 * 60 * 60,
        "gps_location_retention"
    )
    /**
     * A featureSource containing a single linestring which has the GPS-history of the user.
     * However, metadata (such as when every single point was visited) is lost here (but is kept in `historicalUserLocations`.
     * Note that this featureSource is _derived_ from 'historicalUserLocations'
     */
    public historicalUserLocationsTrack: FeatureSourceForLayer & Tiled

    /**
     * A feature source containing the current home location of the user
     */
    public homeLocation: FeatureSourceForLayer & Tiled

    /**
     * A builtin layer which contains the selected element.
     * Loads 'selected_element.json'
     * This _might_ contain multiple points, e.g. every center of a multipolygon
     */
    public selectedElementsLayer: FeatureSourceForLayer & Tiled

    public readonly mainMapObject: BaseUIElement & MinimapObj

    /**
     * Which layers are enabled in the current theme and what filters are applied onto them
     */
    public filteredLayers: UIEventSource<FilteredLayer[]> = new UIEventSource<FilteredLayer[]>(
        [],
        "filteredLayers"
    )

    /**
     * Filters which apply onto all layers
     */
    public globalFilters: UIEventSource<GlobalFilter[]> = new UIEventSource([], "globalFilters")

    /**
     * Which overlays are shown
     */
    public overlayToggles: { config: TilesourceConfig; isDisplayed: UIEventSource<boolean> }[]

    constructor(layoutToUse: LayoutConfig, options?: { attemptLogin: true | boolean }) {
        super(layoutToUse, options)

        this.availableBackgroundLayers = AvailableBaseLayers.AvailableLayersAt(this.locationControl)

        let defaultLayer = AvailableBaseLayers.osmCarto
        const available = this.availableBackgroundLayers.data
        for (const layer of available) {
            if (this.backgroundLayerId.data === layer.id) {
                defaultLayer = layer
            }
        }
        const self = this
        this.backgroundLayer = new UIEventSource<BaseLayer>(defaultLayer)
        this.backgroundLayer.addCallbackAndRunD((layer) => self.backgroundLayerId.setData(layer.id))

        const attr = new Attribution(
            this.locationControl,
            this.osmConnection.userDetails,
            this.layoutToUse,
            this.currentBounds
        )

        // Will write into this.leafletMap
        this.mainMapObject = Minimap.createMiniMap({
            background: this.backgroundLayer,
            location: this.locationControl,
            leafletMap: this.leafletMap,
            bounds: this.currentBounds,
            attribution: attr,
            lastClickLocation: this.LastClickLocation,
        })

        this.overlayToggles =
            this.layoutToUse?.tileLayerSources
                ?.filter((c) => c.name !== undefined)
                ?.map((c) => ({
                    config: c,
                    isDisplayed: QueryParameters.GetBooleanQueryParameter(
                        "overlay-" + c.id,
                        c.defaultState,
                        "Wether or not the overlay " + c.id + " is shown"
                    ),
                })) ?? []
        this.filteredLayers = new UIEventSource<FilteredLayer[]>(
            MapState.InitializeFilteredLayers(this.layoutToUse, this.osmConnection)
        )

        this.lockBounds()
        this.AddAllOverlaysToMap(this.leafletMap)

        this.initHomeLocation()
        this.initGpsLocation()
        this.initUserLocationTrail()
        this.initCurrentView()
        this.initSelectedElement()

        new TitleHandler(this)
    }

    public AddAllOverlaysToMap(leafletMap: UIEventSource<any>) {
        const initialized = new Set()
        for (const overlayToggle of this.overlayToggles) {
            new ShowOverlayLayer(overlayToggle.config, leafletMap, overlayToggle.isDisplayed)
            initialized.add(overlayToggle.config)
        }

        for (const tileLayerSource of this.layoutToUse?.tileLayerSources ?? []) {
            if (initialized.has(tileLayerSource)) {
                continue
            }
            new ShowOverlayLayer(tileLayerSource, leafletMap)
        }
    }

    private lockBounds() {
        const layout = this.layoutToUse
        if (!layout?.lockLocation) {
            return
        }
        console.warn("Locking the bounds to ", layout.lockLocation)
        this.mainMapObject.installBounds(
            new BBox(layout.lockLocation),
            this.featureSwitchIsTesting.data
        )
    }

    private initCurrentView() {
        let currentViewLayer: FilteredLayer = this.filteredLayers.data.filter(
            (l) => l.layerDef.id === "current_view"
        )[0]

        if (currentViewLayer === undefined) {
            // This layer is not needed by the theme and thus unloaded
            return
        }

        let i = 0
        const self = this
        const features: Store<{ feature: any; freshness: Date }[]> = this.currentBounds.map(
            (bounds) => {
                if (bounds === undefined) {
                    return []
                }
                i++
                const feature = {
                    freshness: new Date(),
                    feature: {
                        type: "Feature",
                        properties: {
                            id: "current_view-" + i,
                            current_view: "yes",
                            zoom: "" + self.locationControl.data.zoom,
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                [
                                    [bounds.maxLon, bounds.maxLat],
                                    [bounds.minLon, bounds.maxLat],
                                    [bounds.minLon, bounds.minLat],
                                    [bounds.maxLon, bounds.minLat],
                                    [bounds.maxLon, bounds.maxLat],
                                ],
                            ],
                        },
                    },
                }
                return [feature]
            }
        )

        this.currentView = new TiledStaticFeatureSource(features, currentViewLayer)
    }

    private initGpsLocation() {
        // Initialize the gps layer data. This is emtpy for now, the actual writing happens in the Geolocationhandler
        const gpsLayerDef: FilteredLayer = this.filteredLayers.data.filter(
            (l) => l.layerDef.id === "gps_location"
        )[0]
        if (gpsLayerDef === undefined) {
            return
        }
        this.currentUserLocation = new SimpleFeatureSource(gpsLayerDef, Tiles.tile_index(0, 0, 0))
    }

    private initSelectedElement(){
        const layerDef: FilteredLayer = this.filteredLayers.data.filter(
            (l) => l.layerDef.id === "selected_element"
        )[0]
        const empty = []
        const store = this.selectedElement.map(feature => {
            if(feature === undefined || feature === null){
                return empty
            }
            return [{
                feature: {
                    type:"Feature",
                    properties: {
                        selected: "yes",
                        id: "selected" + feature.properties.id
                    },
                    geometry:feature.geometry
                }
                , freshness: new Date()}];
        });
        this.selectedElementsLayer =  new TiledStaticFeatureSource(store,layerDef);
    }

    private initUserLocationTrail() {
        const features = LocalStorageSource.GetParsed<{ feature: any; freshness: Date }[]>(
            "gps_location_history",
            []
        )
        const now = new Date().getTime()
        features.data = features.data
            .map((ff) => ({ feature: ff.feature, freshness: new Date(ff.freshness) }))
            .filter(
                (ff) =>
                    now - ff.freshness.getTime() < 1000 * this.gpsLocationHistoryRetentionTime.data
            )
        features.ping()
        const self = this
        let i = 0
        this.currentUserLocation?.features?.addCallbackAndRunD(([location]) => {
            if (location === undefined) {
                return
            }

            const previousLocation = features.data[features.data.length - 1]
            if (previousLocation !== undefined) {
                const d = GeoOperations.distanceBetween(
                    previousLocation.feature.geometry.coordinates,
                    location.feature.geometry.coordinates
                )
                let timeDiff = Number.MAX_VALUE // in seconds
                const olderLocation = features.data[features.data.length - 2]
                if (olderLocation !== undefined) {
                    timeDiff =
                        (new Date(previousLocation.freshness).getTime() -
                            new Date(olderLocation.freshness).getTime()) /
                        1000
                }
                if (d < 20 && timeDiff < 60) {
                    // Do not append changes less then 20m - it's probably noise anyway
                    return
                }
            }

            const feature = JSON.parse(JSON.stringify(location.feature))
            feature.properties.id = "gps/" + features.data.length
            i++
            features.data.push({ feature, freshness: new Date() })
            features.ping()
        })

        let gpsLayerDef: FilteredLayer = this.filteredLayers.data.filter(
            (l) => l.layerDef.id === "gps_location_history"
        )[0]
        if (gpsLayerDef !== undefined) {
            this.historicalUserLocations = new SimpleFeatureSource(
                gpsLayerDef,
                Tiles.tile_index(0, 0, 0),
                features
            )
            this.changes.setHistoricalUserLocations(this.historicalUserLocations)
        }

        const asLine = features.map((allPoints) => {
            if (allPoints === undefined || allPoints.length < 2) {
                return []
            }

            const feature: Feature<LineString, OsmTags> = {
                type: "Feature",
                properties: {
                    id: "location_track",
                    "_date:now": new Date().toISOString(),
                },
                geometry: {
                    type: "LineString",
                    coordinates: allPoints.map((ff) => ff.feature.geometry.coordinates),
                },
            }

            self.allElements.ContainingFeatures.set(feature.properties.id, feature)

            return [
                {
                    feature,
                    freshness: new Date(),
                },
            ]
        })
        let gpsLineLayerDef: FilteredLayer = this.filteredLayers.data.filter(
            (l) => l.layerDef.id === "gps_track"
        )[0]
        if (gpsLineLayerDef !== undefined) {
            this.historicalUserLocationsTrack = new TiledStaticFeatureSource(
                asLine,
                gpsLineLayerDef
            )
        }
    }

    private initHomeLocation() {
        const empty = []
        const feature = Stores.ListStabilized(
            this.osmConnection.userDetails.map((userDetails) => {
                if (userDetails === undefined) {
                    return undefined
                }
                const home = userDetails.home
                if (home === undefined) {
                    return undefined
                }
                return [home.lon, home.lat]
            })
        ).map((homeLonLat) => {
            if (homeLonLat === undefined) {
                return empty
            }
            return [
                {
                    feature: {
                        type: "Feature",
                        properties: {
                            id: "home",
                            "user:home": "yes",
                            _lon: homeLonLat[0],
                            _lat: homeLonLat[1],
                        },
                        geometry: {
                            type: "Point",
                            coordinates: homeLonLat,
                        },
                    },
                    freshness: new Date(),
                },
            ]
        })

        const flayer = this.filteredLayers.data.filter((l) => l.layerDef.id === "home_location")[0]
        if (flayer !== undefined) {
            this.homeLocation = new TiledStaticFeatureSource(feature, flayer)
        }
    }

    private static getPref(
        osmConnection: OsmConnection,
        key: string,
        layer: LayerConfig
    ): UIEventSource<boolean> {
        return osmConnection.GetPreference(key, layer.shownByDefault + "").sync(
            (v) => {
                if (v === undefined) {
                    return undefined
                }
                return v === "true"
            },
            [],
            (b) => {
                if (b === undefined) {
                    return undefined
                }
                return "" + b
            }
        )
    }

    public static InitializeFilteredLayers(
        layoutToUse: { layers: LayerConfig[]; id: string },
        osmConnection: OsmConnection
    ): FilteredLayer[] {
        if (layoutToUse === undefined) {
            return []
        }
        const flayers: FilteredLayer[] = []
        for (const layer of layoutToUse.layers) {
            let isDisplayed: UIEventSource<boolean>
            if (layer.syncSelection === "local") {
                isDisplayed = LocalStorageSource.GetParsed(
                    layoutToUse.id + "-layer-" + layer.id + "-enabled",
                    layer.shownByDefault
                )
            } else if (layer.syncSelection === "theme-only") {
                isDisplayed = MapState.getPref(
                    osmConnection,
                    layoutToUse.id + "-layer-" + layer.id + "-enabled",
                    layer
                )
            } else if (layer.syncSelection === "global") {
                isDisplayed = MapState.getPref(
                    osmConnection,
                    "layer-" + layer.id + "-enabled",
                    layer
                )
            } else {
                isDisplayed = QueryParameters.GetBooleanQueryParameter(
                    "layer-" + layer.id,
                    layer.shownByDefault,
                    "Wether or not layer " + layer.id + " is shown"
                )
            }

            const flayer: FilteredLayer = {
                isDisplayed,
                layerDef: layer,
                appliedFilters: new UIEventSource<Map<string, FilterState>>(
                    new Map<string, FilterState>()
                ),
            }
            layer.filters.forEach((filterConfig) => {
                const stateSrc = filterConfig.initState()

                stateSrc.addCallbackAndRun((state) =>
                    flayer.appliedFilters.data.set(filterConfig.id, state)
                )
                flayer.appliedFilters
                    .map((dict) => dict.get(filterConfig.id))
                    .addCallback((state) => stateSrc.setData(state))
            })

            flayers.push(flayer)
        }

        for (const layer of layoutToUse.layers) {
            if (layer.filterIsSameAs === undefined) {
                continue
            }
            const toReuse = flayers.find((l) => l.layerDef.id === layer.filterIsSameAs)
            if (toReuse === undefined) {
                throw (
                    "Error in layer " +
                    layer.id +
                    ": it defines that it should be use the filters of " +
                    layer.filterIsSameAs +
                    ", but this layer was not loaded"
                )
            }
            console.warn(
                "Linking filter and isDisplayed-states of " +
                    layer.id +
                    " and " +
                    layer.filterIsSameAs
            )
            const selfLayer = flayers.findIndex((l) => l.layerDef.id === layer.id)
            flayers[selfLayer] = {
                isDisplayed: toReuse.isDisplayed,
                layerDef: layer,
                appliedFilters: toReuse.appliedFilters,
            }
        }

        return flayers
    }
}
