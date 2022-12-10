import * as L from "leaflet"
import { UIEventSource } from "../UIEventSource"
import ScrollableFullScreen from "../../UI/Base/ScrollableFullScreen"
import FilteredLayer from "../../Models/FilteredLayer"
import Constants from "../../Models/Constants"
import BaseUIElement from "../../UI/BaseUIElement"

/**
 * The stray-click-hanlders adds a marker to the map if no feature was clicked.
 * Shows the given uiToShow-element in the messagebox
 */
export default class StrayClickHandler {
    private _lastMarker

    constructor(
        state: {
            LastClickLocation: UIEventSource<{ lat: number; lon: number }>
            selectedElement: UIEventSource<string>
            filteredLayers: UIEventSource<FilteredLayer[]>
            leafletMap: UIEventSource<L.Map>
        },
        uiToShow: ScrollableFullScreen,
        iconToShow: BaseUIElement
    ) {
        const self = this
        const leafletMap = state.leafletMap
        state.filteredLayers.data.forEach((filteredLayer) => {
            filteredLayer.isDisplayed.addCallback((isEnabled) => {
                if (isEnabled && self._lastMarker && leafletMap.data !== undefined) {
                    // When a layer is activated, we remove the 'last click location' in order to force the user to reclick
                    // This reclick might be at a location where a feature now appeared...
                    state.leafletMap.data.removeLayer(self._lastMarker)
                }
            })
        })

        state.LastClickLocation.addCallback(function (lastClick) {
            if (self._lastMarker !== undefined) {
                state.leafletMap.data?.removeLayer(self._lastMarker)
            }

            if (lastClick === undefined) {
                return
            }

            state.selectedElement.setData(undefined)
            const clickCoor: [number, number] = [lastClick.lat, lastClick.lon]
            self._lastMarker = L.marker(clickCoor, {
                icon: L.divIcon({
                    html: iconToShow.ConstructElement(),
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [0, -45],
                }),
            })

            self._lastMarker.addTo(leafletMap.data)

            self._lastMarker.on("click", () => {
                if (leafletMap.data.getZoom() < Constants.userJourney.minZoomLevelToAddNewPoints) {
                    leafletMap.data.flyTo(
                        clickCoor,
                        Constants.userJourney.minZoomLevelToAddNewPoints
                    )
                    return
                }

                uiToShow.Activate()
            })
        })

        state.selectedElement.addCallback(() => {
            if (self._lastMarker !== undefined) {
                leafletMap.data.removeLayer(self._lastMarker)
                this._lastMarker = undefined
            }
        })
    }
}
