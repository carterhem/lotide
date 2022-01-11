const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
 if (JSON.stringify(actual)===JSON.stringify(expected)){
   return true;
 } else {
   return false
 }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, -4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, -4]), false); // => should PASS