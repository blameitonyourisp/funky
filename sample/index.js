/**
 * This function has no access or scope set, defined with vanilla jsdoc tags in
 * global scope.
 * 
 * @function
 */
const globalFuncA = () => {}

/**
 * This function has "public" access and "instance" scope, defined with a funky
 * tag in global scope.
 * 
 * @funky {public|instance}
 */
const globalFuncB = () => {}

/**
 * This function has "protected" access and "inner" scope with an overloaded
 * type string, defined with a funky tag in uppercase in global scope.
 * 
 * @funky {PROTECTED|inner|overloaded}
 */
const globalFuncC = () => {}

/**
 * This function has "public" access only, defined with a funky tag in
 * uppercase in global scope.
 * 
 * @funky {PUBLIC}
 */
const globalFuncD = () => {}

/**
 * This function has "public" access and an invalid scope, defined with a funky
 * tag in global scope.
 * 
 * @funky {public|invalid}
 */
const globalFuncE = () => {}

/**
 * This function has an empty type field, defined with a funky tag in global
 * scope.
 * 
* @funky {}
*/
const globalFuncF = () => {}