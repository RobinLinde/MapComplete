import { Translation } from "../../UI/i18n/Translation"
import { TagsFilter } from "../../Logic/Tags/TagsFilter"
import FilterConfigJson from "./Json/FilterConfigJson"
import Translations from "../../UI/i18n/Translations"
import { TagUtils } from "../../Logic/Tags/TagUtils"
import ValidatedTextField from "../../UI/Input/ValidatedTextField"
import { TagConfigJson } from "./Json/TagConfigJson"
import { UIEventSource } from "../../Logic/UIEventSource"
import { FilterState } from "../FilteredLayer"
import { QueryParameters } from "../../Logic/Web/QueryParameters"
import { Utils } from "../../Utils"
import { RegexTag } from "../../Logic/Tags/RegexTag"
import BaseUIElement from "../../UI/BaseUIElement"
import Table from "../../UI/Base/Table"
import Combine from "../../UI/Base/Combine"

export default class FilterConfig {
    public readonly id: string
    public readonly options: {
        question: Translation
        osmTags: TagsFilter | undefined
        originalTagsSpec: TagConfigJson
        fields: { name: string; type: string }[]
    }[]
    public readonly defaultSelection?: number

    constructor(json: FilterConfigJson, context: string) {
        if (json.options === undefined) {
            throw `A filter without options was given at ${context}`
        }
        if (json.id === undefined) {
            throw `A filter without id was found at ${context}`
        }
        if (json.id.match(/^[a-zA-Z0-9_-]*$/) === null) {
            throw `A filter with invalid id was found at ${context}. Ids should only contain letters, numbers or - _`
        }

        if (json.options.map === undefined) {
            throw `A filter was given where the options aren't a list at ${context}`
        }
        this.id = json.id
        let defaultSelection: number = undefined
        this.options = json.options.map((option, i) => {
            const ctx = `${context}.options.${i}`
            const question = Translations.T(option.question, `${ctx}.question`)
            let osmTags: undefined | TagsFilter = undefined
            if ((option.fields?.length ?? 0) == 0 && option.osmTags !== undefined) {
                osmTags = TagUtils.Tag(option.osmTags, `${ctx}.osmTags`)
                FilterConfig.validateSearch(osmTags, ctx)
            }
            if (question === undefined) {
                throw `Invalid filter: no question given at ${ctx}`
            }

            const fields: { name: string; type: string }[] = (option.fields ?? []).map((f, i) => {
                const type = f.type ?? "string"
                if (!ValidatedTextField.ForType(type) === undefined) {
                    throw `Invalid filter: ${type} is not a valid validated textfield type (at ${ctx}.fields[${i}])\n\tTry one of ${Array.from(
                        ValidatedTextField.AvailableTypes()
                    ).join(",")}`
                }
                if (f.name === undefined || f.name === "" || f.name.match(/[a-z0-9_-]+/) == null) {
                    throw `Invalid filter: a variable name should match [a-z0-9_-]+ at ${ctx}.fields[${i}]`
                }
                return {
                    name: f.name,
                    type,
                }
            })

            for (const field of fields) {
                for (let ln in question.translations) {
                    const txt = question.translations[ln]
                    if (ln.startsWith("_")) {
                        continue
                    }
                    if (txt.indexOf("{" + field.name + "}") < 0) {
                        throw (
                            "Error in filter with fields at " +
                            context +
                            ".question." +
                            ln +
                            ": The question text should contain every field, but it doesn't contain `{" +
                            field +
                            "}`: " +
                            txt
                        )
                    }
                }
            }

            if (option.default) {
                if (defaultSelection === undefined) {
                    defaultSelection = i
                } else {
                    throw `Invalid filter: multiple filters are set as default, namely ${i} and ${defaultSelection} at ${context}`
                }
            }

            if (option.osmTags !== undefined) {
                FilterConfig.validateSearch(TagUtils.Tag(option.osmTags), ctx)
            }

            return {
                question: question,
                osmTags: osmTags,
                fields,
                originalTagsSpec: option.osmTags,
            }
        })

        this.defaultSelection = defaultSelection

        if (this.options.some((o) => o.fields.length > 0) && this.options.length > 1) {
            throw `Invalid filter at ${context}: a filter with textfields should only offer a single option.`
        }

        if (this.options.length > 1 && this.options[0].osmTags !== undefined) {
            throw (
                "Error in " +
                context +
                "." +
                this.id +
                ": the first option of a multi-filter should always be the 'reset' option and not have any filters"
            )
        }
    }

    private static validateSearch(osmTags: TagsFilter, ctx: string) {
        osmTags.visit((t) => {
            if (!(t instanceof RegexTag)) {
                return
            }
            if (typeof t.value == "string") {
                return
            }

            if (
                t.value.source == "^..*$" ||
                t.value.source == ".+" ||
                t.value.source == "^[\\s\\S][\\s\\S]*$" /*Compiled regex with 'm'*/
            ) {
                return
            }

            if (!t.value.ignoreCase) {
                throw `At ${ctx}: The filter for key '${t.key}' uses a regex '${t.value}', but you should use a case invariant regex with ~i~ instead, as search should be case insensitive`
            }
        })
    }

    public initState(): UIEventSource<FilterState> {
        function reset(state: FilterState): string {
            if (state === undefined) {
                return ""
            }
            return "" + state.state
        }

        let defaultValue = ""
        if (this.options.length > 1) {
            defaultValue = "" + (this.defaultSelection ?? 0)
        } else {
            // Only a single option
            if (this.defaultSelection === 0) {
                defaultValue = "true"
            }
        }
        const qp = QueryParameters.GetQueryParameter(
            "filter-" + this.id,
            defaultValue,
            "State of filter " + this.id
        )

        if (this.options.length > 1) {
            // This is a multi-option filter; state should be a number which selects the correct entry
            const possibleStates: FilterState[] = this.options.map((opt, i) => ({
                currentFilter: opt.osmTags,
                state: i,
            }))

            // We map the query parameter for this case
            return qp.sync(
                (str) => {
                    const parsed = Number(str)
                    if (isNaN(parsed)) {
                        // Nope, not a correct number!
                        return undefined
                    }
                    return possibleStates[parsed]
                },
                [],
                reset
            )
        }

        const option = this.options[0]

        if (option.fields.length > 0) {
            return qp.sync(
                (str) => {
                    // There are variables in play!
                    // str should encode a json-hash
                    try {
                        const props = JSON.parse(str)

                        const origTags = option.originalTagsSpec
                        const rewrittenTags = Utils.WalkJson(origTags, (v) => {
                            if (typeof v !== "string") {
                                return v
                            }
                            for (const key in props) {
                                v = (<string>v).replace("{" + key + "}", props[key])
                            }
                            return v
                        })
                        const parsed = TagUtils.Tag(rewrittenTags)
                        return <FilterState>{
                            currentFilter: parsed,
                            state: str,
                        }
                    } catch (e) {
                        return undefined
                    }
                },
                [],
                reset
            )
        }

        // The last case is pretty boring: it is checked or it isn't
        const filterState: FilterState = {
            currentFilter: option.osmTags,
            state: "true",
        }
        return qp.sync(
            (str) => {
                // Only a single option exists here
                if (str === "true") {
                    return filterState
                }
                return undefined
            },
            [],
            reset
        )
    }

    public GenerateDocs(): BaseUIElement {
        const hasField = this.options.some((opt) => opt.fields?.length > 0)
        return new Table(
            Utils.NoNull(["id", "question", "osmTags", hasField ? "fields" : undefined]),
            this.options.map((opt, i) => {
                const isDefault = this.options.length > 1 && (this.defaultSelection ?? 0) == i
                return Utils.NoNull([
                    this.id + "." + i,
                    isDefault
                        ? new Combine([opt.question.SetClass("font-bold"), "(default)"])
                        : opt.question,
                    opt.osmTags?.asHumanString(false, false, {}) ?? "",
                    opt.fields?.length > 0
                        ? new Combine(opt.fields.map((f) => f.name + " (" + f.type + ")"))
                        : undefined,
                ])
            })
        )
    }
}
