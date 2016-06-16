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

    if (typeof item === 'string') {
      if (test(item)) {
        results.push(item);
      }
    } else if (Array.isArray(item)) {
      for (var i = 0; i < item.length; i++) {
        recurse(item[i]);
      }
    } else {
      for (var key in item) {
        recurse(item[key]);
      }
    }
  };

  recurse(input);
  return results;

};