import FeatureSource, { Tiled } from "../FeatureSource"
import { Tiles } from "../../../Models/TileRange"
import { IdbLocalStorage } from "../../Web/IdbLocalStorage"
import { UIEventSource } from "../../UIEventSource"
import LayerConfig from "../../../Models/ThemeConfig/LayerConfig"
import { BBox } from "../../BBox"
import SimpleFeatureSource from "../Sources/SimpleFeatureSource"
import FilteredLayer from "../../../Models/FilteredLayer"
import Loc from "../../../Models/Loc"

/***
 * Saves all the features that are passed in to localstorage, so they can be retrieved on the next run
 *
 * Technically, more an Actor then a featuresource, but it fits more neatly this way
 */
export default class SaveTileToLocalStorageActor {
    private readonly visitedTiles: UIEventSource<Map<number, Date>>
    private readonly _layer: LayerConfig
    private readonly _flayer: FilteredLayer
    private readonly initializeTime = new Date()

    constructor(layer: FilteredLayer) {
        this._flayer = layer
        this._layer = layer.layerDef
        this.visitedTiles = IdbLocalStorage.Get("visited_tiles_" + this._layer.id, {
            defaultValue: new Map<number, Date>(),
        })
        this.visitedTiles.stabilized(100).addCallbackAndRunD((tiles) => {
            for (const key of Array.from(tiles.keys())) {
                const tileFreshness = tiles.get(key)

                const toOld =
                    this.initializeTime.getTime() - tileFreshness.getTime() >
                    1000 * this._layer.maxAgeOfCache
                if (toOld) {
                    // Purge this tile
                    this.SetIdb(key, undefined)
                    console.debug("Purging tile", this._layer.id, key)
                    tiles.delete(key)
                }
            }
            this.visitedTiles.ping()
            return true
        })
    }

    public LoadTilesFromDisk(
        currentBounds: UIEventSource<BBox>,
        location: UIEventSource<Loc>,
        registerFreshness: (tileId: number, freshness: Date) => void,
        registerTile: (src: FeatureSource & Tiled) => void
    ) {
        const self = this
        const loadedTiles = new Set<number>()
        this.visitedTiles.addCallbackD((tiles) => {
            if (tiles.size === 0) {
                // We don't do anything yet as probably not yet loaded from disk
                // We'll unregister later on
                return
            }
            currentBounds.addCallbackAndRunD((bbox) => {
                if (self._layer.minzoomVisible > location.data.zoom) {
                    // Not enough zoom
                    return
                }

                // Iterate over all available keys in the local storage, check which are needed and fresh enough
                for (const key of Array.from(tiles.keys())) {
                    const tileFreshness = tiles.get(key)
                    if (tileFreshness > self.initializeTime) {
                        // This tile is loaded by another source
                        continue
                    }

                    registerFreshness(key, tileFreshness)
                    const tileBbox = BBox.fromTileIndex(key)
                    if (!bbox.overlapsWith(tileBbox)) {
                        continue
                    }
                    if (loadedTiles.has(key)) {
                        // Already loaded earlier
                        continue
                    }
                    loadedTiles.add(key)
                    this.GetIdb(key).then((features: { feature: any; freshness: Date }[]) => {
                        if (features === undefined) {
                            return
                        }
                        console.debug("Loaded tile " + self._layer.id + "_" + key + " from disk")
                        const src = new SimpleFeatureSource(
                            self._flayer,
                            key,
                            new UIEventSource<{ feature: any; freshness: Date }[]>(features)
                        )
                        registerTile(src)
                    })
                }
            })

            return true // Remove the callback
        })
    }

    public addTile(tile: FeatureSource & Tiled) {
        const self = this
        tile.features.addCallbackAndRunD((features) => {
            const now = new Date()

            if (features.length > 0) {
                self.SetIdb(tile.tileIndex, features)
            }
            // We _still_ write the time to know that this tile is empty!
            this.MarkVisited(tile.tileIndex, now)
        })
    }

    public poison(lon: number, lat: number) {
        for (let z = 0; z < 25; z++) {
            const { x, y } = Tiles.embedded_tile(lat, lon, z)
            const tileId = Tiles.tile_index(z, x, y)
            this.visitedTiles.data.delete(tileId)
        }
    }

    public MarkVisited(tileId: number, freshness: Date) {
        this.visitedTiles.data.set(tileId, freshness)
        this.visitedTiles.ping()
    }

    private SetIdb(tileIndex, data) {
        try {
            IdbLocalStorage.SetDirectly(this._layer.id + "_" + tileIndex, data)
        } catch (e) {
            console.error(
                "Could not save tile to indexed-db: ",
                e,
                "tileIndex is:",
                tileIndex,
                "for layer",
                this._layer.id
            )
        }
    }

    private GetIdb(tileIndex) {
        return IdbLocalStorage.GetDirectly(this._layer.id + "_" + tileIndex)
    }
}
