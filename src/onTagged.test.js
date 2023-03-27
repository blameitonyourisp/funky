import { onTagged } from "./onTagged.js"

describe("onTagged", () => {
    const [defaultAccess, defaultScope] = ["public", "instance"]
    const getDoclet = (access, scope) => {
        return { kind: "function", access, scope }
    }
    const getTag = (...names) => { 
        return { value: { type: { names } } }
    }
    test("valid type", () => {
        let doclet = {}
        const [access, scope] = ["private", "inner"]
        onTagged(doclet, getTag(access, scope))
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("overloaded", () => {
        let doclet = {}
        const [access, scope] = ["package", "static"]
        onTagged(doclet, getTag(access, scope, "overload"))
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("no scope", () => {
        let doclet = {}
        const [access, scope] = ["protected", defaultScope]
        onTagged(doclet, getTag(access))
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("invalid access", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, getTag("invalid", scope))
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("invalid scope", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, getTag(access, "invalid"))
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("empty type", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, { value: {} })
        expect(doclet).toEqual(getDoclet(access, scope))
    })
    test("no type", () => {
        let doclet = {}
        const [access, scope] = [defaultAccess, defaultScope]
        onTagged(doclet, undefined)
        expect(doclet).toEqual(getDoclet(access, scope))
    })
})