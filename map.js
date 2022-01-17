const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("array true")
  } else {
    console.log("array false")
  }
}


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const thoughts = ["minor", "because", "capital"]
const ideas = ["life", "existence", "the world"]

//test cases
const results1 = map(words, word => word[0]);
const results2 = map(thoughts, thoughts => thoughts.length)
const results3 = map(ideas, ideas => ideas)
console.log(results1);
console.log(results2)
console.log(results3)
//for more test cases, put in end result as the second part/ and new callback varialbe as action


assertArraysEqual(results1, (['g', 'c', 't', 'm', 't']));
assertArraysEqual(results2, ([ 5, 7, 7]));
assertArraysEqual(results3, ([ "life", "existence", "the world"]));

//test one - what they have given us (letters and first thing)
//test two - compare index position and give positions
//test three - compare letters to characters lengths

module.exports = map;