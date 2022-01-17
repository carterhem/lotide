const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let endObject = {}//creating object to push things to
  let noSpace = string.split(" ").join('')//creating new variable for string with no spaces
  for (let j = 0; j < noSpace.length; j++) {//for loop to iterate through and start to add
    if (endObject[noSpace[j]]) {// check if the j is present in the object as key
      endObject[noSpace[j]] = endObject[noSpace[j]] + 1;// if item exists as a key add to it
    } else {
      endObject[noSpace[j]] = 1// if item doesn exist as a key - intialize it
    };
  }
  return endObject;
};
const result = countLetters("lighthouse in the house")

console.log(result);
module.exports = countLetters;