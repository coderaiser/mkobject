'use strict';

const currify = require('currify');

const {assign} = Object;
const {isArray} = Array;

const bindKeys = currify((fn, array, value, i) => {
    return fn(array[i], value);
});

const objectify = (key, value) => ({
    [key]: value,
});

module.exports = (keys, values) => {
    check(keys, values);
    
    const keyValues = values.map(bindKeys(objectify, keys));
    return assign(...keyValues);
};

function check(keys, values) {
    if (!isArray(keys))
        throw Error('keys should be an array!');
    
    if (!isArray(values))
        throw Error('values should be an array!');
    
    if (values.length !== keys.length)
        throw Error('length of keys and values should be equal!');
}

