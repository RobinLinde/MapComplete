/**
 * Script to download images from Wikimedia Commons, and save them together with license information.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import { unescape } from "querystring"
import SmallLicense from "../Models/smallLicense"

interface ExtMetadataProp {
    value: string
    source: string
    hidden: string
}

interface ImageQueryAPIResponse {
    continue: {
        iistart: string
        continue: string
    }
    query: {
        normalized?: {
            from: string
            to: string
        }[]
        pages: {
            [key: string]: {
                pageid: number
                ns: number
                title: string
                imagerepository: string
                imageinfo?: {
                    user: string
                    url: string
                    descriptionurl: string
                    descriptionshorturl: string
                    extmetadata?: {
                        DateTime: ExtMetadataProp
                        ObjectName: ExtMetadataProp
                        CommonsMetadataExtension?: ExtMetadataProp
                        Categories?: ExtMetadataProp
                        Assessments?: ExtMetadataProp
                        ImageDescription?: ExtMetadataProp
                        DateTimeOriginal?: ExtMetadataProp
                        Credit?: ExtMetadataProp
                        Artist?: ExtMetadataProp
                        LicenseShortName?: ExtMetadataProp
                        UsageTerms?: ExtMetadataProp
                        AttributionRequired?: ExtMetadataProp
                        Copyrighted?: ExtMetadataProp
                        Restrictions?: ExtMetadataProp
                        License?: ExtMetadataProp
                    }
                }[]
            }
        }
    }
}

interface CategoryMember {
    pageid: number
    ns: number
    title: string
}

interface CategoryQueryAPIResponse {
    batchcomplete: string
    query: {
        categorymembers: CategoryMember[]
    }
}

interface TemplateQueryAPIResponse {
    batchcomplete: string
    query: {
        normalized?: {
            from: string
            to: string
        }[]
        pages: {
            [key: string]: {
                pageid: number
                ns: number
                title: string
                templates?: {
                    ns: number
                    title: string
                }[]
            }
        }
    }
}

// Map license names of Wikimedia Commons to different names
const licenseMapping = {}

// Map template names to license names
const templateMapping = {
    "Template:PD": "Public Domain",
}

async function main(args: string[]) {
    if (args.length < 2) {
        console.log("Usage: downloadCommons.ts <output folder> <url> <?url> <?url> .. ")
        return
    }
    const [outputFolder, ...urls] = args

    for (const url of urls) {
        // Download details from the API
        const commonsFileName = url.split("/").pop().split("?").shift()
        console.log(`Processing ${commonsFileName}...`)

        const baseUrl = url.split("/").slice(0, 3).join("/")

        // Check if it is a file or a category
        if (url.includes("Category:")) {
            // Download all files in the category
            const apiUrl = `${baseUrl}/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${commonsFileName}&cmlimit=250&cmtype=file`
            const response = await fetch(apiUrl)
            const apiDetails: CategoryQueryAPIResponse = await response.json()
            for (const member of apiDetails.query.categorymembers) {
                await downloadImage(member.title, outputFolder, baseUrl)
            }
        } else {
            await downloadImage(commonsFileName, outputFolder, baseUrl)
        }
    }
}

async function downloadImage(filename: string, outputFolder: string, baseUrl: string) {
    const apiUrl = `${baseUrl}/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata|user&iimetadataversion=latest&titles=${filename}`
    const response = await fetch(apiUrl)
    const apiDetails: ImageQueryAPIResponse = await response.json()

    // Check if the file exists, locally or externally
    if (apiDetails.query.pages["-1"]) {
        // Image does not exist locally, check if it exists externally
        if (apiDetails.query.pages["-1"].imagerepository !== "local" && apiDetails.query.pages["-1"].imagerepository !== "") {
            const externalUrl = apiDetails.query.pages["-1"].imageinfo[0].descriptionurl
            const externalBase = externalUrl.split("/").slice(0, 3).join("/")
            const externalFilename = externalUrl.split("/").pop().split("?").shift()
            console.log(`\x1b[33m%s\x1b[0m`, `${filename} is external, re-running with ${externalUrl}...`)
            await downloadImage(externalFilename, outputFolder, externalBase)
            return
        }
        console.log(`\x1b[33m%s\x1b[0m`, `${filename} does not exist!, skipping...`)
    } else {
        // Harvest useful information
        const wikiPage = apiDetails.query.pages[Object.keys(apiDetails.query.pages)[0]]
        const wikiUrl = wikiPage.imageinfo[0].descriptionurl
        const fileUrl = wikiPage.imageinfo[0].url
        const author = wikiPage.imageinfo[0].extmetadata?.Artist?.value || wikiPage.imageinfo[0].user
        let license = wikiPage.imageinfo[0].extmetadata?.LicenseShortName?.value || null

        // Check if the output folder exists
        if (!existsSync(outputFolder)) {
            const parts = outputFolder.split("/")
            for (var i = 0; i < parts.length; i++) {
                const part = parts.slice(0, i + 1).join("/")
                if (!existsSync(part)) {
                    console.log(`Creating folder ${part}`)
                    mkdirSync(part)
                }
            }
        }

        // Check if the license is present
        if (!license) {
            console.log(`${filename} does not have a license, falling back to checking template...`)
            const templateUrl = `${baseUrl}/w/api.php?action=query&format=json&prop=templates&titles=${filename}&tllimit=500`
            const templateResponse = await fetch(templateUrl)
            const templateDetails: TemplateQueryAPIResponse = await templateResponse.json()

            // Loop through all templates and check if one of them is a license
            const wikiPage = templateDetails.query.pages[Object.keys(templateDetails.query.pages)[0]]
            if (wikiPage.templates) {
                for (const template of wikiPage.templates) {
                    if (templateMapping[template.title]) {
                        console.log(`Found license ${templateMapping[template.title]} for ${filename}`)
                        license = templateMapping[template.title]
                    }
                }
            }

            // If no license was found, skip the file
            if (!license) {
                // Log in yellow
                console.log(`\x1b[33m%s\x1b[0m`, `No license found for ${filename}, skipping...`)
                return
            }
        }

        // Download the file and save it
        const cleanFileName = unescape(filename).replace("File:", "")
        console.log(
            `Downloading ${cleanFileName} from ${fileUrl} and saving it to ${outputFolder}/${cleanFileName}...`
        )
        const fileResponse = await fetch(fileUrl)
        const fileBuffer = await fileResponse.arrayBuffer()
        const file = Buffer.from(fileBuffer)
        const filePath = `${outputFolder}/${cleanFileName}`
        writeFileSync(filePath, file)

        // Save the license information
        const licenseInfo: SmallLicense = {
            path: cleanFileName,
            license: licenseMapping[license] || license,
            authors: [author],
            sources: [wikiUrl],
        }

        const licensePath = `${outputFolder}/license_info.json`
        if (!existsSync(licensePath)) {
            // Create the file if it doesn't exist
            writeFileSync(licensePath, JSON.stringify([licenseInfo], null, 2))
        } else {
            // Append to the file if it does exist
            const licenseFile = await readFileSync(licensePath, "utf8")
            const licenseData = JSON.parse(licenseFile)
            licenseData.push(licenseInfo)
            writeFileSync(licensePath, JSON.stringify(licenseData, null, 2))
        }
    }
}

main(process.argv.slice(2))