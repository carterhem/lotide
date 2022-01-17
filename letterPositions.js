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

const letterPositions = function (sentence) {
  const results = {}// results is the end object to keep everything
  let noSpaceSentence = sentence.split(" ").join('')
  for (let j = 0; j < noSpaceSentence.length; j++) {// looping through our given paramenter(sentence string)
    let letter = noSpaceSentence[j];
    if (results[letter]) {//array does exist - push to it
      results[letter].push(j);
    } else {//array does not exist - initialize it, to be found in if statement
     results[letter] = [j]
    }
  }
  return results; // don't forget to return the object
}

//test string
assertArraysEqual(letterPositions("he llo").e, [1]);
assertArraysEqual(letterPositions("rubber").b, [2, 3]);
assertArraysEqual(letterPositions("start").t, [1, 4]);

module.exports = letterPositions;