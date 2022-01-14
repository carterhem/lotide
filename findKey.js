const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback){
  let objectArray = Object.keys(object)//take items out of the object
  let result = "" //place to store
  for (const element of objectArray){// looking at each key of object (which are now in an array so we can read)
    if(callback(object[element])){ //if the result of callback (2) is true, as in matches the value of the key we are looking at
      result = element;// result is equal to the key that we are at
      //console.log(object[element])
      break;//once we recieve the first truthy//stop looking
    }
  }
 return result;
};



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }},x => x.stars === 2), "noma")
