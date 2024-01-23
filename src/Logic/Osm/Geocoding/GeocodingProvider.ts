import { BBox } from "../../BBox"
import { UIEventSource } from "../../UIEventSource"

export interface GeoCodeResult {
    /**
     * ID of the result
     */
    id: string

    /**
     * Name to show in the UI
     */
    name: string

    /**
     * Location of the result
     */
    location: [number, number]

    /**
     * Extent of the result, optional
     */
    extent?: [number, number, number, number]

    /**
     * OSM Type of the result, optional
     */
    osm_type?: "R" | "W" | "N"

    /**
     * OSM ID of the result, optional
     */
    osm_id?: number
}

export interface GeocodingProvider {
    /**
     * Execute a search query
     *
     * @param query Search query
     * @param bbox BBox to search in, optional, might not be supported by all providers
     * @param bias Location to bias the search to, optional, might not be supported by all providers
     * @param limit Amount of results to return
     */
    Search(
        query: string,
        bbox?: BBox,
        bias?: [number, number],
        limit?: number
    ): Promise<GeoCodeResult[]>

    /**
     * Create an autocomplete UIEventSource
     *
     * @param query Search query
     * @param uiEventSource UIEventSource to use for sending results
     * @param bbox BBox to search in, optional, might not be supported by all providers
     * @param bias Location to bias the search to, optional, might not be supported by all providers
     * @param limit Amount of results to return
     */
    Autocomplete(
        query: string,
        uiEventSource: UIEventSource<GeoCodeResult[]>,
        bbox?: BBox,
        bias?: [number, number],
        limit?: number
    )
}
