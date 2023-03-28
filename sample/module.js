/**
 * @module module
 */

/**
 * This function has "package" access and "inner" scope, defined with vanilla
 * jsdoc tags inside a module tagged file.
 * 
 * @function
 * @package
 * @inner
 */
const moduleFuncA = () => {}

/**
 * This function has "public" access and "instance" scope, defined with a funky
 * tag inside a module tagged file.
 * 
 * @funky {public|instance}
 */
const moduleFuncB = () => {}

/**
 * This function has "protected" access and "inner" scope with an overloaded
 * type string, defined with a funky tag inside a module tagged file.
 * 
 * @funky {protected|inner|overloaded}
 */
const moduleFuncC = () => {}

/**
 * This function has "public" access only, defined with a funky tag inside a 
 * module tagged file.
 * 
 * @funky {public}
 */
const moduleFuncD = () => {}

/**
 * This function has "public" access and an invalid scope, defined with a funky
 * tag inside a module tagged file.
 * 
 * @funky {public|invalid}
 */
const moduleFuncE = () => {}

/**
 * This function has an empty type field, defined with a funky tag inside a 
 * module tagged file.
 * 
 * @funky {}
 */
const moduleFuncF = () => {}