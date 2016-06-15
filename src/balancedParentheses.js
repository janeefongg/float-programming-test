'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {

  var stack = [];
  var pairs = { '(': ')'};

  for (let i = 0; i < input.length; i++) {
    var currentChar = input[i];
    if (currentChar in pairs) {
      stack.push(currentChar);
    } else if (currentChar === ')') {
      if (pairs[stack.pop()] !== currentChar) {
        return false;
      }
    }
  }

  return stack.length === 0;

};