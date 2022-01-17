const eqArrays = function (actual, expected) {
  if (JSON.stringify(actual)===JSON.stringify(expected)){
    return true;
  } else {
    return false;
  }
 }

 const assertArraysEqual = function(array1, array2) {
   if (eqArrays(array1,array2)) {
     console.log("array true")
   } else {
     console.log("array false")
   }
 }


 assertArraysEqual([1, 2, 3], [1, 2, 3]);
 assertArraysEqual([1, 2, 3], [1, 2, 4]);
