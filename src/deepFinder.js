'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {

  var results = [];

  const recurse = (item) => {
    for (let i = 0; i < item.length; i++) {
      var currentItem = item[i];
      if (Array.isArray(currentItem)) { // check if currentItem is an array, if it is, recurse.
        recurse(currentItem);
      } else if (typeof currentItem === "object") { // check if currentItem is an object, if it is, for in loop
        for (let key in currentItem) {
          if (test(currentItem[key])) {
            results.push(currentItem[key]);
          }
        }
      } else if (test(currentItem)) { // if currentItem is not a collection, run through test function
        results.push(currentItem);
      }
    }
  }

  recurse(input);

  return results;

};