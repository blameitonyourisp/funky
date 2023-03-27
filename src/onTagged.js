// Copyright (c) 2022 James Reid. All rights reserved.
//
// This source code file is licensed under the terms of the MIT license, a copy
// of which may be found in the LICENSE.md file in the root of this repository.  
// 
// For a template copy of the license see one of the following 3rd party sites:
//      * <https://opensource.org/licenses/MIT>
//      * <https://choosealicense.com/licenses/mit>
//      * <https://spdx.org/licenses/MIT>

/**
 * @file Defines onTagged function for custom scoped function tag
 * @module tag
 * @author James Reid
 */

// @ts-check

// @body
/** 
 * Array of available access types, see 
 * {@link https://jsdoc.app/tags-access.html here} for more information
 * 
 * @global
 * @type {string[]}
 */
const accesses = ["public", "package", "protected", "private"]

/** 
 * Array of available scope types, see following links for more information
 * on individual scopes:
 *      - {@link https://jsdoc.app/tags-global.html global}
 *      - {@link https://jsdoc.app/tags-instance.html instance}
 *      - {@link https://jsdoc.app/tags-static.html static}
 *      - {@link https://jsdoc.app/tags-inner.html inner}
 * 
 * @global
 * @type {string[]}
 */
const scopes = ["global", "instance", "static", "inner"]

/**
 * Triggered by jsdoc on the "onTagged" event, *directly* modifies the passed 
 * instance of doclet to add required fields to turn the doclet into a 
 * scoped and access specified function as specified by the tag values. See
 * {@link https://jsdoc.app/about-plugins.html here} for more information on
 * jsdoc plugins and plugin events.
 * 
 * Default scope is considered to be "instance" as opposed to "global" since
 * a function defined in global scope (i.e. without a file "module" or
 * function "memberof" tag) with the "instance" scope set, will still appear 
 * in generated docs as an instance method of the global scope. However a 
 * function in a module or namespace with "global" scope set will override 
 * membership of the module or namespace. Therefore default scope is "instance"
 * such that when tag is used *without* scope field, the existing method or 
 * namespace context is preserved.
 * 
 * @summary Modify doclet tag to create a scoped and access specified function
 * @param {object} doclet - instance of doclet object created by jsdoc which
 *      contains the content of the comment block in which the given tag was 
 *      parsed
 * @param {object} tag - instance of tag object created by jsdoc which contains
 *      the parsed data of the tag which was found
 * @returns {void}
 */
const onTagged = (doclet, tag) => { 
    let [access, scope] = tag?.value?.type?.names || []
    // set access and scope to default values if not one of allowable scope or
    // access enum strings as defined by jsdoc schema, see jsdoc schema 
    // definition here <https://github.com/jsdoc/jsdoc/blob/main/packages/jsdoc-doclet/lib/schema.js>
    access = accesses.includes(access) ? access : accesses[0]
    scope = scopes.includes(scope) ? scope : scopes[1]
    Object.assign(doclet, { kind: "function", access, scope })
}

// @exports
export { onTagged }