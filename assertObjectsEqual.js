//returns true of both objects have identical keys with identical values
//otherwise you get back a big fat false
const eqObjects = function (object1, object2) {
  let firstArray = Object.keys(object1);
  let secondArray = Object.keys(object2);
  if (firstArray.length !== secondArray.length) {// do these objects have the same number of keys? no value looking
    return false;
  }
  for (const key of firstArray) {// need to use firstArray in order to manipulate the keys (can't iterate object)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {// is the value of key in object an array
      return eqArrays(object1[key], object2[key]);//eqArrays is evaluating and returning true for is if they match
      //mind blown - we can iterate through keys on both ends at the same time and it works
    } else if (object1[key] !== object2[key]) {// if they aren't an array, we can compare them directly
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual,expected)) {
    console.log(`😂😂😂 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1' })