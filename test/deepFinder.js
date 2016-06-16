'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark',
        bar: 'avatar',
        baz: 'toothpaste',
        foobar: ['animal', 'games', 'cleaning'],
        foobaz: {
            magic: 'lightning',
            healthpoints: 'twenty',
            equipment: ['helmet', 'armor', 'sword', 'shield']
        }
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'avatar', 'animal', 'armor', 'allegory'], 'result is correct' );
    t.end();
} );