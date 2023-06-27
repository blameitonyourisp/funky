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
 * @ignore
 * @file Rollup config
 * @author James Reid
 */

// @ts-check

// @imports-package
import terser from "@rollup/plugin-terser"

// @body
// declare rollup config object
const config = [
    {
        input: "src/index.js",
        output: [
            { file: "dist/bundle.min.cjs", format: "cjs" }
        ],
        plugins: [
            // @ts-expect-error
            terser({ maxWorkers: 6 })
        ]
    }
]

// @exports
export default config