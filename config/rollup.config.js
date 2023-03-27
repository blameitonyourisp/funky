const { nodeResolve } = require("@rollup/plugin-node-resolve")
const terser = require("@rollup/plugin-terser")

const config = {
    input: "src/index.js",
    output: [
        { file: "dist/bundle.min.cjs", format: "cjs" }
    ],
    plugins: [
        nodeResolve(),
        terser({ maxWorkers: 6 })
    ]
}

module.exports = config