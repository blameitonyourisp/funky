// Copyright (c) 2022 James Reid. All rights reserved.
//
// This source code file is licensed under the terms of the MIT license, a copy
// of which may be found in the LICENSE.md file in the root of this repository.  
// 
// For a template copy of the license see one of the following 3rd party sites:
//      * <https://opensource.org/licenses/MIT>
//      * <https://choosealicense.com/licenses/mit>
//      * <https://spdx.org/licenses/MIT>

// @ts-check

// @import-types
import { describe, test, expect } from "@jest/globals"

// @body
import { onTagged } from "./onTagged.js"

describe("onTagged", () => {
    // default access and scope values use by onTagged function
    const [defaultAccess, defaultScope] = ["public", "instance"]

    /**
     * Mock fragment of doclet which should be generated be onTagged function
     * 
     * @param {string} access 
     * @param {string} scope 
     * @returns {{kind: string, access: string, scope: string}}
     */
    const getDoclet = (access, scope) => {
        return { kind: "function", access, scope }
    }

    /**
     * Mock fragment of jsdoc tag required by onTagged function
     * 
     * @param  {...string} names 
     * @returns {{value: {type: {names: string[]}}}}
     */
    const getTag = (...names) => { 
        return { value: { type: { names } } }
    }

    // test non-default valid access and scope strings "@funky {private|inner}"
    test("valid type", () => {
        let doclet = {}
        const [access, scope] = ["private", "inner"]
        onTagged(doclet, getTag(access, scope))
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test an overloaded jsdoc type object with a third string 
    // "@funky {private|inner|overloaded}"
    test("overloaded", () => {
        let doclet = {}
        const [access, scope] = ["package", "static"]
        onTagged(doclet, getTag(access, scope, "overload"))
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test only valid access string passed "@funky {protected}"
    test("no scope", () => {
        let doclet = {}
        const [access, scope] = ["protected", defaultScope]
        onTagged(doclet, getTag(access))
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test invalid access string "@funky {public|instance}"
    test("invalid access", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, getTag("invalid", scope))
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test invalid scope string "@funky {public|instance}"
    test("invalid scope", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, getTag(access, "invalid"))
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test empty type "@funky {}"
    test("empty type", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, { value: {} })
        expect(doclet).toEqual(getDoclet(access, scope))
    })

    // test no type object provided "@funky"
    test("no type", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, undefined)
        expect(doclet).toEqual(getDoclet(access, scope))
    })
})