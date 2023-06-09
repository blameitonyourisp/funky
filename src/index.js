// Copyright (c) 2022 James Reid. All rights reserved.
//
// This source code file is licensed under the terms of the MIT license, a copy
// of which may be found in the LICENSE.md file in the root of this repository.  
// 
// For a template copy of the license see one of the following 3rd party sites:
//      - <https://opensource.org/licenses/MIT>
//      - <https://choosealicense.com/licenses/mit>
//      - <https://spdx.org/licenses/MIT>

/**
 * @file Defines tags to be added to jsdoc tag dictionary
 * @author James Reid
 */

// @ts-check

// @imports-module
import { onTagged } from "./onTagged.js"

// @body
// standard tag definition for custom jsdoc plugin, see 
// <https://jsdoc.app/about-plugins.html> for more details
const defineTags = dictionary => {
    const options = {
        canHaveType: true,
        canHaveName: false,
        isNamespace: false,
        mustHaveValue: true,
        mustNotHaveDescription: true,
        mustNotHaveValue: false
    }
    // define named tag with long name aliases, same imported onTagged function
    // for each alias - synonyms could also be defined following syntax defined
    // here https://jsdoc.app/about-plugins.html
    dictionary.defineTag("funky", { ...options, onTagged })
    dictionary.defineTag("scopedfunction", { ...options, onTagged })
    dictionary.defineTag("scopedfunc", { ...options, onTagged })
}

// @exports
export { defineTags }