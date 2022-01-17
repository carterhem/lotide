
const eqArrays = require('./eqArrays')


 const assertArraysEqual = function(array1, array2) {
   if (eqArrays(array1,array2)) {
     console.log("array true")
   } else {
     console.log("array false")
   }
 }

 module.exports = assertArraysEqual;
