const assertArraysEqual = require('../assertArraysEqual')

//testing
 assertArraysEqual([1, 2, 3], [1, 2, 3]);// should PASS
 assertArraysEqual([1, 2, 3], [1, 2, 4]);// should FAIL