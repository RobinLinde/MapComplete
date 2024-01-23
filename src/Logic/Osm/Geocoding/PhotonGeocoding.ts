import type { Feature, FeatureCollection } from "geojson"
import { BBox } from "../../BBox"
import { Utils } from "../../../Utils"
import { UIEventSource } from "../../UIEventSource"
import { GeoCodeResult, GeocodingProvider } from "./GeocodingProvider"

interface PhotonGeoCodeResult extends Feature {
    properties: {
        /**
         * OSM ID of the object
         */
        osm_id: number

        /**
         * Extent of the object, not always present
         */
        extent?: [number, number, number, number]

        /**
         * Country of the object
         */
        country: string

        /**
         * City of the object
         */
        city?: string

        /**
         * Country code of the object
         */
        countrycode: string

        /**
         * Locality of the object
         */
        locality?: string

        /**
         * Type of the object
         */
        type: string

        /**
         * Type of OSM object
         */
        osm_type: "R" | "W" | "N"

        /**
         * 'Primary' key of the object
         */
        osm_key: string

        /**
         * Street of the object
         */
        street?: string

        /**
         * Value of the 'primary' key
         */
        osm_value: string

        /**
         * Postcode of the object
         *
         * Can be either one postcode or a list of postcodes separated by a semicolon
         */
        postcode?: string

        /**
         * Name of the object
         */
        name: string

        /**
         * County of the object
         */
        county?: string

        /**
         * State of the object
         */
        state: string
    }
}

export interface GeoCodeResultCollection extends FeatureCollection {
    features: PhotonGeoCodeResult[]
}

export class PhotonGeocoding implements GeocodingProvider {
    public static readonly host = "https://photon.komoot.io/api/"

    // Save timeout for autocomplete
    private static lastAutocompleteTimeout

    /**
     * Search for locations using the Photon API
     *
     * @param query Search query
     * @param bbox BBox to search in, optional
     * @param bias Location to bias the search to, optional
     * @param limit Amount of results to return, defaults to 1
     * @returns A GeoJSON FeatureCollection containing the results
     */
    async Search(
        query: string,
        bbox?: BBox,
        bias?: [number, number],
        limit: number = 1
    ): Promise<GeoCodeResult[]> {
        const b = bbox ?? BBox.global
        const url =
            PhotonGeocoding.host +
            "?limit=" +
            limit +
            (bias ? `&lon=${bias[0]}&lat=${bias[1]}` : "") +
            "&bbox=" +
            `${b.getWest()},${b.getNorth()},${b.getEast()},${b.getSouth()}` +
            "&q=" +
            query

        return Utils.downloadJson(url).then((json) => {
            const features = json.features
            const results: GeoCodeResult[] = []

            for (const feature of features) {
                results.push({
                    id: feature.properties.osm_id.toString(),
                    name: feature.properties.name,
                    location: feature.geometry.coordinates,
                    extent: feature.properties.extent,
                    osm_id: feature.properties.osm_id,
                    osm_type: feature.properties.osm_type,
                })
            }

            return results
        })
    }

    /**
     * Special function for handling autocomplete results, handles multiple requests, making sure we're not requesting too much
     *
     * It buffers requests, until the user stops typing for 500ms, then it sends the request
     *
     * @param query
     * @param bbox
     * @param bias
     * @param limit
     */
    async Autocomplete(
        query: string,
        uiEventSource: UIEventSource<GeoCodeResult[]>,
        bbox?: BBox,
        bias?: [number, number],
        limit: number = 5
    ) {
        // Cancel the previous timeout
        if (PhotonGeocoding.lastAutocompleteTimeout) {
            clearTimeout(PhotonGeocoding.lastAutocompleteTimeout)
        }

        // Set the timeout
        PhotonGeocoding.lastAutocompleteTimeout = setTimeout(async () => {
            PhotonGeocoding.lastAutocompleteTimeout = undefined

            // Call the search function and save it in the provided store
            const results = await this.Search(query, bbox, bias, limit)
            uiEventSource.set(results)
        }, 500)
    }
}
