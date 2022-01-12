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

 const without = function(source, itemsToRemove) {
  //return source.filter(function(i) {return!itemsToRemove.includes(i) })
  let endArray = [];
  for(let j = 0; j < source.length; j++) {
    if(itemsToRemove.indexOf(source[j]) < 0) {
        endArray.push(source[j])
    }
  } return endArray;
   } 



  

 
 //test cases
 console.log(without([1, 2, 3], [1])) // => [2, 3]
 console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

 //specific test case for ensuring that the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
