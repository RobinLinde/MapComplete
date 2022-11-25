import { InputElement } from "./InputElement"
import { UIEventSource } from "../../Logic/UIEventSource"
import Combine from "../Base/Combine"
import Svg from "../../Svg"
import { Utils } from "../../Utils"
import Loc from "../../Models/Loc"
import { GeoOperations } from "../../Logic/GeoOperations"
import Minimap, { MinimapObj } from "../Base/Minimap"
import BackgroundMapSwitch from "../BigComponents/BackgroundMapSwitch"
import BaseUIElement from "../BaseUIElement"

/**
 * Selects a length after clicking on the minimap, in meters
 */
export default class LengthInput extends InputElement<string> {
    private readonly _location: UIEventSource<Loc>
    private readonly value: UIEventSource<string>
    private readonly background: UIEventSource<any>

    constructor(
        mapBackground: UIEventSource<any>,
        location: UIEventSource<Loc>,
        value?: UIEventSource<string>
    ) {
        super()
        this._location = location
        this.value = value ?? new UIEventSource<string>(undefined)
        this.background = mapBackground
        this.SetClass("block")
    }

    GetValue(): UIEventSource<string> {
        return this.value
    }

    IsValid(str: string): boolean {
        const t = Number(str)
        return !isNaN(t) && t >= 0
    }

    protected InnerConstructElement(): HTMLElement {
        let map: BaseUIElement & MinimapObj = undefined
        let layerControl: BaseUIElement = undefined
        if (!Utils.runningFromConsole) {
            map = Minimap.createMiniMap({
                background: this.background,
                allowMoving: false,
                location: this._location,
                attribution: true,
                leafletOptions: {
                    tap: true,
                },
            })

            layerControl = new BackgroundMapSwitch(
                {
                    locationControl: this._location,
                    backgroundLayer: this.background,
                },
                this.background,
                {
                    allowedCategories: ["map", "photo"],
                }
            )
        }
        const crosshair = new Combine([
            Svg.length_crosshair_svg().SetStyle(
                `position: absolute;top: 0;left: 0;transform:rotate(${this.value.data ?? 0}deg);`
            ),
        ])
            .SetClass("block length-crosshair-svg relative pointer-events-none")
            .SetStyle("z-index: 1000; visibility: hidden")

        const element = new Combine([
            crosshair,
            layerControl?.SetStyle(
                "position: absolute; bottom: 0.25rem; left: 0.25rem; z-index: 1000"
            ),
            map?.SetClass("w-full h-full block absolute top-0 left-O overflow-hidden"),
        ])
            .SetClass("relative block bg-white dark:bg-black border border-black rounded-xl overflow-hidden")
            .ConstructElement()

        this.RegisterTriggers(
            map?.ConstructElement(),
            map?.leafletMap,
            crosshair.ConstructElement()
        )
        element.style.overflow = "hidden"
        element.style.display = "block"

        return element
    }

    private RegisterTriggers(
        htmlElement: HTMLElement,
        leafletMap: UIEventSource<L.Map>,
        measurementCrosshair: HTMLElement
    ) {
        let firstClickXY: [number, number] = undefined
        let lastClickXY: [number, number] = undefined
        const self = this

        function onPosChange(x: number, y: number, isDown: boolean, isUp?: boolean) {
            if (x === undefined || y === undefined) {
                // Touch end
                firstClickXY = undefined
                lastClickXY = undefined
                return
            }

            const rect = htmlElement.getBoundingClientRect()
            // From the central part of location
            const dx = x - rect.left
            const dy = y - rect.top
            if (isDown) {
                if (lastClickXY === undefined && firstClickXY === undefined) {
                    firstClickXY = [dx, dy]
                } else if (firstClickXY !== undefined && lastClickXY === undefined) {
                    lastClickXY = [dx, dy]
                } else if (firstClickXY !== undefined && lastClickXY !== undefined) {
                    // we measure again
                    firstClickXY = [dx, dy]
                    lastClickXY = undefined
                }
            }

            if (firstClickXY === undefined) {
                measurementCrosshair.style.visibility = "hidden"
                return
            }

            const distance = Math.sqrt(
                (dy - firstClickXY[1]) * (dy - firstClickXY[1]) +
                    (dx - firstClickXY[0]) * (dx - firstClickXY[0])
            )
            if (isUp) {
                if (distance > 15) {
                    lastClickXY = [dx, dy]
                }
            } else if (lastClickXY !== undefined) {
                return
            }
            measurementCrosshair.style.visibility = "unset"
            measurementCrosshair.style.left = firstClickXY[0] + "px"
            measurementCrosshair.style.top = firstClickXY[1] + "px"

            const angle = (180 * Math.atan2(firstClickXY[1] - dy, firstClickXY[0] - dx)) / Math.PI
            const angleGeo = (angle + 270) % 360
            const measurementCrosshairInner: HTMLElement = <HTMLElement>(
                measurementCrosshair.firstChild
            )
            measurementCrosshairInner.style.transform = `rotate(${angleGeo}deg)`

            measurementCrosshairInner.style.width = distance * 2 + "px"
            measurementCrosshairInner.style.marginLeft = -distance + "px"
            measurementCrosshairInner.style.marginTop = -distance + "px"

            const leaflet = leafletMap?.data
            if (leaflet) {
                const first = leaflet.layerPointToLatLng(firstClickXY)
                const last = leaflet.layerPointToLatLng([dx, dy])
                const geoDist =
                    Math.floor(
                        GeoOperations.distanceBetween(
                            [first.lng, first.lat],
                            [last.lng, last.lat]
                        ) * 10
                    ) / 10
                self.value.setData("" + geoDist)
            }
        }

        htmlElement.ontouchstart = (ev: TouchEvent) => {
            onPosChange(ev.touches[0].clientX, ev.touches[0].clientY, true)
            ev.preventDefault()
        }

        htmlElement.ontouchmove = (ev: TouchEvent) => {
            onPosChange(ev.touches[0].clientX, ev.touches[0].clientY, false)
            ev.preventDefault()
        }

        htmlElement.ontouchend = (ev: TouchEvent) => {
            onPosChange(undefined, undefined, false, true)
            ev.preventDefault()
        }

        htmlElement.onmousedown = (ev: MouseEvent) => {
            onPosChange(ev.clientX, ev.clientY, true)
            ev.preventDefault()
        }

        htmlElement.onmouseup = (ev) => {
            onPosChange(ev.clientX, ev.clientY, false, true)
            ev.preventDefault()
        }

        htmlElement.onmousemove = (ev: MouseEvent) => {
            onPosChange(ev.clientX, ev.clientY, false)
            ev.preventDefault()
        }
    }
}
