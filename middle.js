const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("array true");
  } else {
    console.log("array false");
  }
};

const middle = function (array) {
  if (array.length <= 2) {
    //less than 2, return empty array
    return [];
  }
  if (array.length % 2 !== 0) {
    //odd number situation - 1 value return
    return [array[Math.floor(array.length / 2)]];
  } else {
    //if its an even number - return 2 value
    const middleLen = Math.floor(array.length / 2);
    return [array[middleLen - 1], array[middleLen]];
  }
};

module.exports = middle;


//testing
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 5, 6]));
// console.log(middle([1]));
// console.log(middle([1, 2]));
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])
// assertArraysEqual(middle([1, 2, 3, 5, 6]),[3])

