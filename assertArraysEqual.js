const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual)===JSON.stringify(expected)){
    return true;
  } else {
    return false;
  }
 }

 const assertArraysEqual = function(eqArrays) {
   if (eqArrays === true) {
     console.log("array true")
   } else if (eqArrays !== true) {
     console.log("array false")
   }
 }


 assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
 assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]));