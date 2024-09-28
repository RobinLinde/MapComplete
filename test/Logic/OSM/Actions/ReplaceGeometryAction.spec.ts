import { Utils } from "../../../../src/Utils"
import { BBox } from "../../../../src/Logic/BBox"
import ReplaceGeometryAction from "../../../../src/Logic/Osm/Actions/ReplaceGeometryAction"
import { describe, expect, it } from "vitest"
import { OsmConnection } from "../../../../src/Logic/Osm/OsmConnection"
import { ImmutableStore } from "../../../../src/Logic/UIEventSource"
import { Changes } from "../../../../src/Logic/Osm/Changes"
import FullNodeDatabaseSource from "../../../../src/Logic/FeatureSource/TiledFeatureSource/FullNodeDatabaseSource"

describe("ReplaceGeometryAction", () => {

    const coordinates = <[number, number][]>[
        [3.216690793633461, 51.21474084112525],
        [3.2167256623506546, 51.214696737309964],
        [3.2169999182224274, 51.214768983537674],
        [3.2169650495052338, 51.21480720678671],
        [3.2169368863105774, 51.21480090625335],
        [3.2169489562511444, 51.21478074454077],
        [3.216886594891548, 51.214765203214625],
        [3.2168812304735184, 51.21477192378873],
        [3.2168644666671753, 51.214768983537674],
        [3.2168537378311157, 51.21478746511261],
        [3.216690793633461, 51.21474084112525],
    ]

    const targetFeature = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Polygon",
            coordinates: [coordinates],
        },
    }

    const wayId = "way/160909312"

    Utils.injectJsonDownloadForTests(
        "https://www.openstreetmap.org/api/0.6/map.json?bbox=3.2166673243045807,51.21467321525788,3.217007964849472,51.21482442824023",
        {
            version: "0.6",
            generator: "CGImap 0.8.6 (1549677 spike-06.openstreetmap.org)",
            copyright: "OpenStreetMap and contributors",
            attribution: "http://www.openstreetmap.org/copyright",
            license: "http://opendatacommons.org/licenses/odbl/1-0/",
            bounds: { minlat: 51.2146732, minlon: 3.2166673, maxlat: 51.2148244, maxlon: 3.217008 },
            elements: [
                {
                    type: "node",
                    id: 1612385157,
                    lat: 51.2148016,
                    lon: 3.2168453,
                    timestamp: "2018-04-30T12:26:00Z",
                    version: 3,
                    changeset: 58553478,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 1728816256,
                    lat: 51.2147111,
                    lon: 3.2170233,
                    timestamp: "2017-07-18T22:52:44Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728816287,
                    lat: 51.2146408,
                    lon: 3.2167601,
                    timestamp: "2021-10-29T16:24:43Z",
                    version: 3,
                    changeset: 113131915,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 1728823481,
                    lat: 51.2146968,
                    lon: 3.2167242,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 5,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 1728823499,
                    lat: 51.2147127,
                    lon: 3.2170302,
                    timestamp: "2017-07-18T22:52:45Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823501,
                    lat: 51.2148696,
                    lon: 3.2168941,
                    timestamp: "2017-07-18T22:52:45Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823514,
                    lat: 51.2147863,
                    lon: 3.2168551,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 5,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 1728823522,
                    lat: 51.2148489,
                    lon: 3.2169012,
                    timestamp: "2017-07-18T22:52:45Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823523,
                    lat: 51.2147578,
                    lon: 3.2169995,
                    timestamp: "2017-07-18T22:52:45Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823543,
                    lat: 51.2148075,
                    lon: 3.2166445,
                    timestamp: "2017-07-18T22:52:46Z",
                    version: 3,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823544,
                    lat: 51.2148553,
                    lon: 3.2169315,
                    timestamp: "2017-07-18T22:52:46Z",
                    version: 2,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 1728823549,
                    lat: 51.2147401,
                    lon: 3.2168877,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 5,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978288376,
                    lat: 51.2147306,
                    lon: 3.2168928,
                    timestamp: "2017-07-18T22:52:21Z",
                    version: 1,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 4978288381,
                    lat: 51.2147638,
                    lon: 3.2168856,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 4,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978288382,
                    lat: 51.2148189,
                    lon: 3.216912,
                    timestamp: "2017-07-18T22:52:21Z",
                    version: 1,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 4978288385,
                    lat: 51.2148835,
                    lon: 3.2170623,
                    timestamp: "2017-07-18T22:52:21Z",
                    version: 1,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 4978288387,
                    lat: 51.2148904,
                    lon: 3.2171037,
                    timestamp: "2017-07-18T22:52:21Z",
                    version: 1,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 4978289383,
                    lat: 51.2147678,
                    lon: 3.2169969,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 4,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978289384,
                    lat: 51.2147684,
                    lon: 3.2168674,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 4,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978289386,
                    lat: 51.2147716,
                    lon: 3.2168811,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 4,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978289388,
                    lat: 51.2148115,
                    lon: 3.216966,
                    timestamp: "2021-11-02T23:38:13Z",
                    version: 7,
                    changeset: 113306325,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 4978289391,
                    lat: 51.2148019,
                    lon: 3.2169194,
                    timestamp: "2017-07-18T22:52:21Z",
                    version: 1,
                    changeset: 50391526,
                    user: "catweazle67",
                    uid: 1976209,
                },
                {
                    type: "node",
                    id: 9219974337,
                    lat: 51.2148449,
                    lon: 3.2171278,
                    timestamp: "2021-11-02T23:40:52Z",
                    version: 1,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 9219979643,
                    lat: 51.2147405,
                    lon: 3.216693,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 1,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 9219979646,
                    lat: 51.2148043,
                    lon: 3.2169312,
                    timestamp: "2021-11-02T23:38:13Z",
                    version: 2,
                    changeset: 113306325,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "node",
                    id: 9219979647,
                    lat: 51.2147792,
                    lon: 3.2169466,
                    timestamp: "2021-11-02T23:37:11Z",
                    version: 1,
                    changeset: 113305401,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                },
                {
                    type: "way",
                    id: 160909311,
                    timestamp: "2021-12-23T12:03:37Z",
                    version: 6,
                    changeset: 115295690,
                    user: "s8evq",
                    uid: 3710738,
                    nodes: [
                        1728823481, 1728823549, 4978288376, 1728823523, 1728823499, 1728816256,
                        1728816287, 1728823481,
                    ],
                    tags: {
                        "addr:city": "Brugge",
                        "addr:country": "BE",
                        "addr:housenumber": "106",
                        "addr:postcode": "8000",
                        "addr:street": "Ezelstraat",
                        building: "house",
                        "source:geometry:date": "2015-07-09",
                        "source:geometry:ref": "Gbg/2391617",
                    },
                },
                {
                    type: "way",
                    id: 160909312,
                    timestamp: "2021-11-02T23:38:13Z",
                    version: 4,
                    changeset: 113306325,
                    user: "Pieter Vander Vennet",
                    uid: 3818858,
                    nodes: [
                        9219979643, 1728823481, 1728823549, 4978289383, 4978289388, 9219979646,
                        9219979647, 4978288381, 4978289386, 4978289384, 1728823514, 9219979643,
                    ],
                    tags: {
                        "addr:city": "Brugge",
                        "addr:country": "BE",
                        "addr:housenumber": "108",
                        "addr:postcode": "8000",
                        "addr:street": "Ezelstraat",
                        building: "house",
                        "source:geometry:date": "2018-10-02",
                        "source:geometry:ref": "Gbg/5926383",
                    },
                },
                {
                    type: "way",
                    id: 160909315,
                    timestamp: "2021-12-23T12:03:37Z",
                    version: 8,
                    changeset: 115295690,
                    user: "s8evq",
                    uid: 3710738,
                    nodes: [
                        1728823543, 1728823501, 1728823522, 4978288382, 1612385157, 1728823514,
                        9219979643, 1728823543,
                    ],
                    tags: {
                        "addr:city": "Brugge",
                        "addr:country": "BE",
                        "addr:housenumber": "110",
                        "addr:postcode": "8000",
                        "addr:street": "Ezelstraat",
                        building: "house",
                        name: "La Style",
                        shop: "hairdresser",
                        "source:geometry:date": "2015-07-09",
                        "source:geometry:ref": "Gbg/5260837",
                    },
                },
                {
                    type: "way",
                    id: 508533816,
                    timestamp: "2021-12-23T12:03:37Z",
                    version: 7,
                    changeset: 115295690,
                    user: "s8evq",
                    uid: 3710738,
                    nodes: [
                        4978288387, 4978288385, 1728823544, 1728823522, 4978288382, 4978289391,
                        9219979646, 4978289388, 9219974337, 4978288387,
                    ],
                    tags: {
                        building: "yes",
                        "source:geometry:date": "2015-07-09",
                        "source:geometry:ref": "Gbg/5260790",
                    },
                },
            ],
        }
    )

    Utils.injectJsonDownloadForTests("https://www.openstreetmap.org/api/0.6/way/160909312/full", {
        version: "0.6",
        generator: "CGImap 0.8.6 (2407324 spike-06.openstreetmap.org)",
        copyright: "OpenStreetMap and contributors",
        attribution: "http://www.openstreetmap.org/copyright",
        license: "http://opendatacommons.org/licenses/odbl/1-0/",
        elements: [
            {
                type: "node",
                id: 1728823481,
                lat: 51.2146968,
                lon: 3.2167242,
                timestamp: "2021-11-02T23:37:11Z",
                version: 5,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 1728823514,
                lat: 51.2147863,
                lon: 3.2168551,
                timestamp: "2021-11-02T23:37:11Z",
                version: 5,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 1728823549,
                lat: 51.2147401,
                lon: 3.2168877,
                timestamp: "2021-11-02T23:37:11Z",
                version: 5,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 4978288381,
                lat: 51.2147638,
                lon: 3.2168856,
                timestamp: "2021-11-02T23:37:11Z",
                version: 4,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 4978289383,
                lat: 51.2147678,
                lon: 3.2169969,
                timestamp: "2021-11-02T23:37:11Z",
                version: 4,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 4978289384,
                lat: 51.2147684,
                lon: 3.2168674,
                timestamp: "2021-11-02T23:37:11Z",
                version: 4,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 4978289386,
                lat: 51.2147716,
                lon: 3.2168811,
                timestamp: "2021-11-02T23:37:11Z",
                version: 4,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 4978289388,
                lat: 51.2148115,
                lon: 3.216966,
                timestamp: "2021-11-02T23:38:13Z",
                version: 7,
                changeset: 113306325,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 9219979643,
                lat: 51.2147405,
                lon: 3.216693,
                timestamp: "2021-11-02T23:37:11Z",
                version: 1,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 9219979646,
                lat: 51.2148043,
                lon: 3.2169312,
                timestamp: "2021-11-02T23:38:13Z",
                version: 2,
                changeset: 113306325,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "node",
                id: 9219979647,
                lat: 51.2147792,
                lon: 3.2169466,
                timestamp: "2021-11-02T23:37:11Z",
                version: 1,
                changeset: 113305401,
                user: "Pieter Vander Vennet",
                uid: 3818858,
            },
            {
                type: "way",
                id: 160909312,
                timestamp: "2021-11-02T23:38:13Z",
                version: 4,
                changeset: 113306325,
                user: "Pieter Vander Vennet",
                uid: 3818858,
                nodes: [
                    9219979643, 1728823481, 1728823549, 4978289383, 4978289388, 9219979646,
                    9219979647, 4978288381, 4978289386, 4978289384, 1728823514, 9219979643,
                ],
                tags: {
                    "addr:city": "Brugge",
                    "addr:country": "BE",
                    "addr:housenumber": "108",
                    "addr:postcode": "8000",
                    "addr:street": "Ezelstraat",
                    building: "house",
                    "source:geometry:date": "2018-10-02",
                    "source:geometry:ref": "Gbg/5926383",
                },
            },
        ],
    })
    Utils.injectJsonDownloadForTests(
        "https://raw.githubusercontent.com/pietervdvn/MapComplete-data/main/latlon2country/0.0.0.json",
        "be"
    )

    it("should move nodes accordingly", async () => {
        const bbox = new BBox([
            [3.2166673243045807, 51.21467321525788],
            [3.217007964849472, 51.21482442824023],
        ])
        const url = `https://www.openstreetmap.org/api/0.6/map.json?bbox=${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`
        const data = await Utils.downloadJson(url)
        const fullNodeDatabase = new FullNodeDatabaseSource()
        fullNodeDatabase.handleOsmJson(data, 0, 0, 0)
        const changes = Changes.createTestObject()
        const osmConnection = new OsmConnection({
            dryRun: new ImmutableStore(true),
        })
        const action = new ReplaceGeometryAction(
            { osmConnection, fullNodeDatabase },
            targetFeature,
            wayId,
            {
                theme: "test",
            }
        )

        const closestIds = await action.GetClosestIds()
        expect(closestIds.closestIds).toEqual([
            9219979643,
            1728823481,
            4978289383,
            4978289388,
            9219979646,
            9219979647,
            4978288381,
            4978289386,
            4978289384,
            1728823514,
            undefined,
        ])

        expect(closestIds.reprojectedNodes.size).toEqual(1)
        const reproj = closestIds.reprojectedNodes.get(1728823549)
        expect(reproj.projectAfterIndex).toEqual(1)
        expect(reproj.newLon).toEqual(3.2168880864669203)
        expect(reproj.newLat).toEqual(51.214739524104694)
        expect(closestIds.detachedNodes.size).toEqual(0)
        const changed = await action.Perform(changes)
        expect(changed[11].changes["coordinates"]).toEqual([
            [3.216690793633461, 51.21474084112525],
            [3.2167256623506546, 51.214696737309964],
            [3.2168880864669203, 51.214739524104694],
            [3.2169999182224274, 51.214768983537674],
            [3.2169650495052338, 51.21480720678671],
            [3.2169368863105774, 51.21480090625335],
            [3.2169489562511444, 51.21478074454077],
            [3.216886594891548, 51.214765203214625],
            [3.2168812304735184, 51.21477192378873],
            [3.2168644666671753, 51.214768983537674],
            [3.2168537378311157, 51.21478746511261],
            [3.216690793633461, 51.21474084112525],
        ])
    })
})
