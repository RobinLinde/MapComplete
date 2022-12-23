import { UIEventSource } from "../UIEventSource"
import { LocalStorageSource } from "../Web/LocalStorageSource"

type GeolocationState = "prompt" | "requested" | "granted" | "denied"

export interface GeoLocationPointProperties extends GeolocationCoordinates {
    id: "gps"
    "user:location": "yes"
    date: string
}

/**
 * An abstract representation of the current state of the geolocation.
 *
 *
 */
export class GeoLocationState {
    /**
     * What do we know about the current state of having access to the GPS?
     * If 'prompt', then we just started and didn't request access yet
     * 'requested' means the user tapped the 'locate me' button at least once
     * 'granted' means that it is granted
     * 'denied' means that we don't have access
     *
     */
    public readonly permission: UIEventSource<GeolocationState> = new UIEventSource("prompt")

    public readonly requestMoment: UIEventSource<Date | undefined> = new UIEventSource(undefined)
    /**
     * If true: the map will center (and re-center) to this location
     */
    public readonly isLocked: UIEventSource<boolean> = new UIEventSource<boolean>(false)

    public readonly currentGPSLocation: UIEventSource<GeolocationCoordinates | undefined> =
        new UIEventSource<GeolocationCoordinates | undefined>(undefined)

    /**
     * A small flag on localstorage. If the user previously granted the geolocation, it will be set.
     * On firefox, the permissions api is broken (probably fingerprint resistiance) and "granted + don't ask again" doesn't stick between sessions.
     *
     * Instead, we set this flag. If this flag is set upon loading the page, we start geolocating immediately.
     * If the user denies the geolocation this time, we unset this flag
     * @private
     */
    private readonly _previousLocationGrant: UIEventSource<"true" | "false"> = <any>(
        LocalStorageSource.Get("geolocation-permissions")
    )

    /**
     * Used to detect a permission retraction
     */
    private readonly _grantedThisSession: UIEventSource<boolean> = new UIEventSource<boolean>(false)
    constructor() {
        const self = this

        this.permission.addCallbackAndRunD(async (state) => {
            if (state === "granted") {
                self._previousLocationGrant.setData("true")
                self._grantedThisSession.setData(true)
                await self.startWatching()
            }
            if (state === "prompt" && self._grantedThisSession.data) {
                // This is _really_ weird: we had a grant earlier, but it's 'prompt' now?
                // This means that the rights have been revoked again!
                //   self.permission.setData("denied")
                self._previousLocationGrant.setData("false")
                self.permission.setData("denied")
                console.warn("Detected a downgrade in permissions!")
            }
            if (state === "denied") {
                self._previousLocationGrant.setData("false")
            }
        })

        if (this._previousLocationGrant.data === "true") {
            // A previous visit successfully granted permission. Chance is high that we are allowed to use it again!

            // We set the flag to false again. If the user only wanted to share their location once, we are not gonna keep bothering them
            this._previousLocationGrant.setData("false")
            console.log("Requesting access to GPS as this was previously granted")
            this.requestPermission()
        }
    }

    /**
     * Installs the listener for updates
     * @private
     */
    private async startWatching() {
        const self = this
        navigator.geolocation.watchPosition(
            function (position) {
                self.currentGPSLocation.setData(position.coords)
            },
            function () {
                console.warn("Could not get location with navigator.geolocation")
            },
            {
                enableHighAccuracy: true,
            }
        )
    }

    /**
     * Requests the user to allow access to their position.
     * When granted, will be written to the 'geolocationState'.
     * This class will start watching
     */
    public requestPermission() {
        if (typeof navigator === "undefined") {
            // Not compatible with this browser
            this.permission.setData("denied")
            return
        }
        if (this.permission.data !== "prompt") {
            return
        }
        this.requestMoment.setData(new Date())
        this.permission.setData("requested")
        try {
            navigator?.permissions
                ?.query({ name: "geolocation" })
                .then((status) => {
                    console.log("Geolocation permission is ", status.state)
                    this.permission.setData(status.state)
                    const self = this
                    status.onchange = function () {
                        self.permission.setData(status.state)
                    }
                    // We _must_ call 'startWatching', as that is the actual trigger for the popup...
                    self.startWatching()
                })
                .catch((e) => console.error("Could not get geopermission", e))
        } catch (e) {
            console.error("Could not get permission:", e)
        }
    }
}