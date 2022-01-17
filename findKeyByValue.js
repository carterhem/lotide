const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) { // converting the object to an array
  let objectArray = Object.keys(object)
  // console.log(objectArray)
  for (const key of objectArray){
    if(object[key]===value){
      return key;
    }
  }
    // console.log key);
    // if (objectArray[] === value) {
    //   console.log(value);
    //   console.log(objectArray key])
    // }
    

  }

//test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;