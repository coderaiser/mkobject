'use strict';

const mkobject = require('..');
const test = require('supertape');

test('mkobject: args: no', (t) => {
    t.throws(mkobject, /keys should be an array!/, 'should throw when no args');
    t.end();
});

test('mkobject: args: no values', (t) => {
    const fn = () => mkobject([]);
    
    t.throws(fn, /values should be an array!/, 'should throw when no values');
    t.end();
});

test('mkobject: args: different length', (t) => {
    const fn = () => mkobject(['a'], []);
    
    t.throws(fn, /length of keys and values should be equal!/, 'should throw when different length');
    t.end();
});

test('mkobject: result', (t) => {
    const keys = ['a', 'b'];
    const values = [1, 2];
    const result = mkobject(keys, values);
    const expected = {
        a: 1,
        b: 2,
    };
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

