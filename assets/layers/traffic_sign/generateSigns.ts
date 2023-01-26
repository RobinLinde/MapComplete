import { readFileSync, writeFileSync, readdirSync } from "fs";
import type { LayerConfigJson } from "../../../Models/ThemeConfig/Json/LayerConfigJson";
import PointRenderingConfigJson from "../../../Models/ThemeConfig/Json/PointRenderingConfigJson";
import { MappingConfigJson, QuestionableTagRenderingConfigJson } from "../../../Models/ThemeConfig/Json/QuestionableTagRenderingConfigJson";
import { TagRenderingConfigJson } from "../../../Models/ThemeConfig/Json/TagRenderingConfigJson";

interface SignFile {
  name: string;
  description: string;
  version: string;
  country: string;
  traffic_signs: TrafficSign[];
}

interface TrafficSign {
  id: string;
  name: string;
  image: LocalImage;
  use?: {
    way: boolean;
    node: boolean;
  };
  implications?: Implication[];
}

interface LocalImage {
  file: string;
}

interface Implication {
  key: string;
  value: string;
}

interface Translations {
  [key: string]: Translation;
}

interface Translation {
  [key: string]: string;
}

const worldWideMappings: MappingConfigJson[] = [
  {
    if: "traffic_sign=city_limit",
    then: {
      en: "City limit",
    },
    icon: "./assets/layers/traffic_sign/images/city_limit.svg"
  },
  {
    if: "traffic_sign=maxspeed",
    then: {
      en: "Maximum speed",
    },
  }
]

function main(){
  // Open original file
  const originalFile = readFileSync("traffic_sign.json", "utf8");
  const originalLayer = JSON.parse(originalFile) as LayerConfigJson
  // Save current tagrendering, so we can use the translations in there
  const originalTagRenderings = originalLayer.tagRenderings as QuestionableTagRenderingConfigJson[];
  const originalSignTagRendering = originalTagRenderings.find(t => t.id === "traffic_sign") as QuestionableTagRenderingConfigJson;
  const originalSignMappings = originalSignTagRendering.mappings;
  const originalSignMapRendering = originalLayer.mapRendering[0] as PointRenderingConfigJson;
  const originalSignIcon = originalSignMapRendering.icon as TagRenderingConfigJson;

  // Create new list of mappings
  const mappings: MappingConfigJson[] = [];
  const iconMappings: MappingConfigJson[] = [];
  const translationMemory: Translations = {};

  // Add world wide mappings
  for(const mapping of worldWideMappings){
    // Add them to the list of mappings
    mappings.push({
      ...mapping,
      then: {
        en: mapping.then.en,
        ...originalSignMappings.find(m => m.if === mapping.if)?.then,
      }
    })
    // Add them to the list of icon mappings, if they have an icon
    if(mapping.icon){
      iconMappings.push({
        if: mapping.if,
        then: mapping.icon,
      })
    }
  }

  // Check which different files there are
  const files = readdirSync("signs");
  for(const file of files){
    const signFile = readFileSync("signs/" + file, "utf8");
    const signs = JSON.parse(signFile) as SignFile;
    for(const sign of signs.traffic_signs){
      // Find item in traffic_signs.json file and save the translations
      const originalMapping = originalSignMappings.find(m => m.if === "traffic_sign=" + sign.id);
      translationMemory[sign.name] = {
        ...originalMapping?.then,
        en: sign.name,
      }

      // Check if the sign starts with the country
      if(!sign.id.toLowerCase().startsWith(signs.country.toLowerCase())){
        throw new Error("Sign " + sign.id + " does not start with country " + signs.country + ", you should fix this!");
      }

      // Create new mapping, reusing original translations
      const iconPath = "./assets/layers/traffic_sign/images/"+signs.country.toLowerCase()+"/"+sign.image.file
      const mapping: MappingConfigJson = {
        if: "traffic_sign=" + sign.id,
        then: {
          ...originalMapping?.then,
          en: sign.name,
        },
        hideInAnswer: "_country!="+signs.country.toLowerCase(),
        icon: {
          path: iconPath,
          class: "large"
        }
      };
      const icon: MappingConfigJson = {
        if: "traffic_sign~" + sign.id + "(;.*)*$",
        then: iconPath
          
      };
      mappings.push(mapping);
      iconMappings.push(icon);
    }
  }

  // Re-run over all mappings, and add translations
  for(const mapping of mappings){
    const memoryTranslation = translationMemory[mapping.then.en];
    if(memoryTranslation){
      mapping.then = {
        ...mapping.then,
        ...memoryTranslation,
      }
    }
  }

  // Create new layer
  const newLayer: LayerConfigJson = {
    ...originalLayer,
    tagRenderings: [
      originalLayer.tagRenderings[0],
      {
        ...originalSignTagRendering,
        mappings: mappings,
      }
    ],
    mapRendering: [
      {
        ...originalSignMapRendering,
        icon: {
          ...originalSignIcon,
          mappings: iconMappings,
        }
      }
    ]
  };

  // Re-add all other tagrenderings
  for (let i = 2; i < originalLayer.tagRenderings.length; i++) {
    newLayer.tagRenderings.push(originalLayer.tagRenderings[i]);
  }

  // Write new layer to file
  writeFileSync("traffic_sign.json", JSON.stringify(newLayer, null, 2));


}

main();