import terser from "@rollup/plugin-terser"

const config = {
    input: "src/index.js",
    output: [
        { file: "dist/bundle.min.cjs", format: "cjs" }
    ],
    plugins: [
        terser({ maxWorkers: 6 })
    ]
}

export default config