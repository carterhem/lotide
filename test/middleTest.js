//needed pieces
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
//eqArrays is required by assertArraysEqual and passed through to here


//testing
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])
assertArraysEqual(middle([1, 2, 3, 5, 6]),[3])