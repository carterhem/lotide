const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return true;
  } else {
    return false
  }
}

//returns true of both objects have identical keys with identical values
//otherwise you get back a big fat false
const eqObjects = function (object1, object2) {
  let firstArray = Object.keys(object1)
  let secondArray = Object.keys(object2)
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

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true
//console.log(Object.keys(ab))
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false