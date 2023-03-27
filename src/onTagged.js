const accesses = ["public", "package", "protected", "private"]
const scopes = ["global", "instance", "static", "inner"]

const onTagged = (doclet, tag) => { 
    let [access, scope] = tag?.value?.type?.names || []
    access = accesses.includes(access) ? access : accesses[0]
    scope = scopes.includes(scope) ? scope : scopes[1]
    return Object.assign(doclet, { kind: "function", access, scope })
}

export { onTagged }