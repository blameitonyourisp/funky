# Funky

A jsdoc plugin for quickly creating scoped and access tagged functions.

![](https://img.shields.io/github/license/blameitonyourisp/funky?style=for-the-badge) ![](https://img.shields.io/bundlephobia/minzip/@13ms/funky?style=for-the-badge) ![](https://img.shields.io/github/languages/code-size/blameitonyourisp/funky?style=for-the-badge)

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Standard](#standard)
  - [Defaults](#defaults)
  - [Aliases](#aliases)

- [Documentation](#documentation)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [License](#license)


## Description

Funky is a dead simple jsdoc plugin which introduces the @funky tag (and explicit aliases) which is designed to set the kind, access, and scope properties of jsdoc doclets.

```javascript
/**
 * Vanilla jsdoc tags required to explicitly declare an access specific, scoped
 * function.
 *
 * @function
 * @public
 * @global
 */

/** 
 * One simple tag to replace them all, and in the darkness bind them, cutting 
 * down on repetitive lines of documentation to achieve the same explicit 
 * result.
 *
 * @funky {public|global}
 */
```

## Installation

If you are not already using jsdoc in your project(s) then go ahead and checkout the [github repository for jsdoc](https://github.com/jsdoc/jsdoc), otherwise continue with installing this plugin in a package that already has jsdoc installed and configured.

```bash
# install the funky plugin (recommended as a dev dependency)
npm install --save-dev @13ms/funky
```

As with any plugin, you must also point jsdoc to the funky repository in the node_modules folder. This must be done using a jsdoc config file (as of creating this plugin, there is no way to use plugins through the jsdoc cli). If you are not currently using a config file with jsdoc, please refer to [this page](https://jsdoc.app/about-configuring-jsdoc.html) for information on writing a config file, otherwise ensure that your jsdoc config file includes funky as a plugin (please note that the following is only a fragment of a config file).

```json
{
    "plugins": [ 
        "node_modules/@13ms/funky/"
    ]
}
```

## Usage

Funky syntax is as simple as `@funky {<access>|<scope>}` nothing more, nothing less.

#### Standard

`@funky` tags follow a simple syntax where the required access and scope values are passed as types in the type field of the `@funky` tag. `@funky` tags ignore any name or description values passed according to jsdoc syntax rules, however a `@funky` tag *must* be passed a type field. If no type field is provided, jsdoc will throw an error when generating documentation. The syntax for a `@funky` tag is `@funky {<access>|<scope>}` where the `<access>` and `<scope>` are passed in the tag type field, and are the `access` and `scope` values which should be applied to the doclet.

The available `access` types are as follows `["public", "package", "protected", "private"]`, please [see here](https://jsdoc.app/tags-access.html) for more information about the jsdoc `@access` tag and the following links for information about explicit `access` tags:

- [public](https://jsdoc.app/tags-public.html) for `@public` tag
- [package](https://jsdoc.app/tags-package.html) for `@package` tag
- [protected](https://jsdoc.app/tags-protected.html) for `@protected` tag
- [private](https://jsdoc.app/tags-private.html) for `@private` tag

The available `scope` types are as follows `["global", "instance", "static", "inner"]`, please see the following links for information about explicit `scope` tags (as of writing this plugin no general `@scope` tag is available in vanilla jsdoc):

- [global](https://jsdoc.app/tags-global.html) for `@global` tag
- [instance](https://jsdoc.app/tags-instance.html) for `@instance` tag
- [static](https://jsdoc.app/tags-static.html) for `@static` tag
- [inner ](https://jsdoc.app/tags-inner.html)for `@inner` tag

```javascript
/** 
 * Funky tags take only type value(s); access first then scope. Any name and or
 * description values provided in jsdoc syntax will be ignored. A funky tag
 * alone with no type field will cause jsdoc to throw an error. All the following
 * tags would produce the same doclet output.
 *
 * @funky {<access>|<scope>}
 * @funky {<access>|<scope>} <name>
 * @funky {<access>|<scope>} <name> - <description>
 */
```

#### Defaults

The default access for `@funky` tags is `public` since this is the most permissive access type available. The default scope for `@funky` tags is `instance`. The `instance` scope is *not* the highest level scope (`global` scope is a valid jsdoc scope), however `instance` is used as the default scope in order to preserve the module or namespace context of a function contained within a `@module` tagged file, or a function with a `@memberof` tag. This allows a shorter tag to be used such as `@funky {public}` to define a `public` access method within a module file or namespace.

Fortunately the default `instance` scope does interfere with methods defined within the `global` which are intended to be documented as such; a tag such as `@funky {public}` used in `global` scope will simply make the method an `instance` of `global` scope.

```javascript
/** 
 * Default access and scope values which are assumed if one or both are missing
 * or if the provided values are not permitted. All the following tags would
 * evaluate to the same jsdoc doclet output thanks to the default values.
 *
 * @funky {public|instance}
 * @funky {invalidAccess|instance}
 * @funky {public|invalidScope}
 * @funky {public}
 * @funky {}
 */
```

#### Aliases

Funky uses `@funky` as the main tag for jsdoc, chosen both since it is short and relatively adjacent to the existing `@function` tag. However obviously `@funky` is not an explicit or meaningful tag name. For this reason `@scopedfunction` and `@scopedfunc` are provided as aliases to `@funky`. All lowercase is used for all aliases in order to stay in keeping with other existing vanilla jsdoc tags such as `@typedef` and `@memberof`.

```javascript
/** 
 * All of these are equivalent tags with identical jsdoc doclet outputs.
 *
 * @funky {public|global}
 * @scopedfunction {public|global}
 * @scopedfunc {public|global}
 */
```

## Documentation

Funky is about as simple as a repository can be; there are no explicit author-generated documentation files other than this README file. For auto-generated jsdoc documentation, please clone the repository and use the appropriate npm script(s) and view the docs in the browser on [localhost](http://localhost:8080).

```bash
# auto-generate jsdoc documentation
git clone https://github.com/blameitonyourisp/funky.git
cd funky
npm install
npm serve-docs # will also automatically run script to generate docs and serve docs on http://localhost:8080
```

## Testing

Funky uses Jest for testing, and a sample directory containing jsdoc comments and empty functions as methods for testing generated output in the browser, please clone the repository and use the appropriate npm script(s) to run the available tests or view sample output in the browser on [localhost](http://localhost:8080).

```bash
# run tests
git clone https://github.com/blameitonyourisp/funky.git
cd funky
npm install
npm test # run available tests
npm serve-docs-sample # serves sample generated docs on http://localhost:8080
```

## Roadmap

Funky is a very simple, feature complete, jsdoc plugin. There are no plans to add to or change this repository in the long term. If you find a bug or think there is a specific feature that should be added or changed, please file a bug report or feature request using this repository's issue tracker.

## License

------

**DISCLAIMER** The author(s) of this repository are in no way legally qualified, and are not providing the end user(s) of this repository with *any* form of legal advice or directions.

------

Copyright (c) 2022 James Reid. All rights reserved.

This software is licensed under the terms of the MIT license, a copy which may be found in the LICENSE.md file in the root of this repository, or please refer to the text below. For a template copy of the license see one of the following 3rd party sites:

- [opensource](https://opensource.org/license/mit/)
- [choosealicense](https://choosealicense.com/licenses/mit/)
- [spdx](https://spdx.org/licenses/MIT)

#### License Text

Copyright 2022 James Reid

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the  "Software"), to deal in the Software without restriction, including  without limitation the rights to use, copy, modify, merge, publish,  distribute, sublicense, and/or sell copies of the Software, and to  permit persons to whom the Software is furnished to do so, subject to  the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

