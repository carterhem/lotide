const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

//testing
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, -4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, -4]), false); // => should PASS