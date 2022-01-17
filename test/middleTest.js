//needed pieces
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
//eqArrays is required by assertArraysEqual and passed through to here


describe("#middle", () => {
  it("returns two values for the EVEN array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  })
  
  it("returns one value for the ODD array", () => {
    assert.deepEqual(middle([1, 2, 3, 5, 6]), [3]);
  })
  
  })



//testing
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])
// assertArraysEqual(middle([1, 2, 3, 5, 6]),[3])