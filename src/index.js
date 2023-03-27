import { onTagged } from "./onTagged.js"

const defineTags = dictionary => {
    const options = {
        canHaveType: true,
        canHaveName: false,
        isNamespace: false,
        mustHaveValue: true,
        mustNotHaveDescription: true,
        mustNotHaveValue: false
    }
    dictionary.defineTag("funky", { ...options, onTagged })
    dictionary.defineTag("scopedfunction", { ...options, onTagged })
    dictionary.defineTag("scopedfunc", { ...options, onTagged })
}

export { defineTags }