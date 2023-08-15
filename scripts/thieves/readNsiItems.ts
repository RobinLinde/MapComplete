/**
 * Parses NSI items for several items
 */

import { writeFileSync } from "fs"
import { LayerConfigJson } from "../../src/Models/ThemeConfig/Json/LayerConfigJson"
import {
    MappingConfigJson,
    QuestionableTagRenderingConfigJson,
} from "../../src/Models/ThemeConfig/Json/QuestionableTagRenderingConfigJson"
import { TagRenderingConfigJson } from "../../src/Models/ThemeConfig/Json/TagRenderingConfigJson"
import { TagConfigJson } from "../../src/Models/ThemeConfig/Json/TagConfigJson"

/**
 * Configure which items to parse to a tagRendering
 */
const itemsToParse = ["brands/amenity/atm"]

interface NameSuggestionIndex {
    _meta: unknown
    nsi: {
        [category: string]: NsiCategory
    }
}

interface NsiCategory {
    properties: unknown
    items: NsiItem[]
    templates: unknown
}

interface NsiItem {
    displayName: string
    id: string
    locationSet: LocationSet
    tags: Record<string, string>
}

interface LocationSet {
    include?: (string | [number, number] | [number, number, number])[]
    exclude?: (string | [number, number] | [number, number, number])[]
}

interface LayerConfig extends Omit<LayerConfigJson, "title"> {
    "#dont-translate": string
    title: string | TagRenderingConfigJson | null
}

async function main() {
    // Download the latest NSI
    const url = "https://raw.githubusercontent.com/osmlab/name-suggestion-index/main/dist/nsi.json"
    const nsi = (await fetch(url).then((response) => response.json())) as NameSuggestionIndex

    // Create a place to store the results
    const results: { [category: string]: NsiItem[] } = {}

    // Loop over all items we need to parse
    for (const item of itemsToParse) {
        // Check if the item exists in the index
        if (!nsi.nsi[item]) {
            console.warn(`Item ${item} not found in index`)
            continue
        }

        // Store the results
        results[item] = nsi.nsi[item].items
    }

    // Process the results
    processResults(results)
}

function processResults(results: { [category: string]: NsiItem[] }) {
    // Create a new MapComplete layer
    const layer: LayerConfig = {
        id: "nsi_items",
        description: {
            en: "Layer containing some tagrenderings based on the Name Suggestion Index These are meant to be reused in other layers by importing the tagRenderings with `nsi_item.<tagrendering>",
        },
        "#dont-translate": "*",
        source: "special:library",
        title: null,
        mapRendering: null,
        tagRenderings: [],
    }

    // Loop over all categories, creating a tagrendering for each
    for (const [category, items] of Object.entries(results)) {
        console.log(`Processing ${category}`)

        /**
         * See if we have multiple entries with the same displayName, if so, remove them,
         * then we also check if there are any duplicate entries for the primary tag, and remove those
         *
         * TODO: Actually properly handle this, instead of just removing them
         */
        const uniqueItems = items
            .filter(
                (item, index, self) =>
                    self.findIndex((otherItem) => otherItem.displayName === item.displayName) ===
                    index
            )
            .filter(
                (item, index, self) =>
                    self.findIndex(
                        (otherItem) =>
                            otherItem.tags[determinePrimaryTag(category)] ===
                            item.tags[determinePrimaryTag(category)]
                    ) === index
            )

        // Create a tagrendering for this category
        const tagRendering: QuestionableTagRenderingConfigJson = {
            id: cleanName(category),
            mappings: [],
        }
        // Loop over all items in this category, creating a mapping for each
        for (const item of uniqueItems) {
            const locationRule = convertLocationSet(item.locationSet)
            if (locationRule === true) {
                // Drop the mapping
                continue
            }

            // Create a mapping for this item
            const mapping: MappingConfigJson = {
                if: `${determinePrimaryTag(category)}=${item.tags[determinePrimaryTag(category)]}`,
                then: item.displayName,
                addExtraTags: convertTags(category, item.tags),
                hideInAnswer: locationRule,
            }

            // Add the mapping to the tagrendering
            tagRendering.mappings?.push(mapping)
        }
        // Add the tagrendering to the layer
        layer.tagRenderings?.push(tagRendering)
    }

    // Save to file, overwriting the existing file
    writeFileSync("./assets/layers/nsi_items/nsi_items.json", JSON.stringify(layer, null, 2))
}

function cleanName(name: string): string {
    return name.replace(/[^a-zA-Z0-9]/g, "_")
}

function determinePrimaryTag(category: string): string {
    if (category.startsWith("brands/")) {
        return "brand"
    } else if (category.startsWith("operators")) {
        return "operator"
    } else if (category.startsWith("networks")) {
        return "network"
    } else return "brand"
}

function convertTags(category: string, tags: Record<string, string>): string[] {
    // Convert the tags to a string, converting to the format key=value, removing the primary tag, also drop any tags that don't start with brand, operator or network
    return Object.entries(tags)
        .filter(
            ([key, value]) =>
                key !== determinePrimaryTag(category) &&
                (key.startsWith("brand") || key.startsWith("operator") || key.startsWith("network"))
        )
        .map(([key, value]) => `${key}=${value}`)
}

function convertLocationSet(locationSet: LocationSet): boolean | TagConfigJson {
    // Save the rules we have
    const includeItems: string[] = []
    const excludeItems: string[] = []

    // Check if there actually is any meaningful data in the locationSet
    if (
        locationSet.include?.length === 1 &&
        locationSet.include[0] === "001" &&
        locationSet.exclude?.length === 0
    ) {
        // This is the default locationSet, so we don't need to do anything
        return false
    }

    // Check the include rules
    if (locationSet.include) {
        for (const rule of locationSet.include) {
            // Check if this is a rule we can parse
            if (typeof rule === "string") {
                if (rule.length === 2) {
                    // This is a country code
                    includeItems.push(rule)
                }
            }
        }
    }

    // Check the exclude rules
    if (locationSet.exclude) {
        for (const rule of locationSet.exclude) {
            // Check if this is a rule we can parse
            if (typeof rule === "string") {
                if (rule.length === 2) {
                    // This is a country code
                    excludeItems.push(rule)
                }
            }
        }
    }

    // Check if we have any rules
    if (includeItems.length === 0 && excludeItems.length === 0) {
        // No rules, so we don't need to do anything
        return true
    } else if (includeItems.length > 0) {
        // Default to include items
        const tagConfig: TagConfigJson = {
            and: includeItems.map((item) => `_country!=${item.toLowerCase()}`),
        }

        return tagConfig
    } else {
        // Default to exclude items
        const tagConfig: TagConfigJson = {
            or: excludeItems.map((item) => `_country=${item.toLowerCase()}`),
        }

        return tagConfig
    }
}

main()
