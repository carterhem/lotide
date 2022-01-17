const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
//create variable
let results = {};//object
//loop through allItems
for (let j = 0; j < allItems.length; j++) {
  let item = allItems[j];
  if (itemsToCount[item] === true) {
    //object/key - returning the value/ if value is true move on
    if(results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
 // console.log(item)
  //console.log(itemsToCount[item])// printing undefined when item doesn't exist in itemsToCount
  //true when something is to be counted, false when not to be counted
  /*if(allItems[j] === itemsToCount[item]){
    ["key"]
  }*/  
} return results;
//check if itemsToCount matches index position
//check if true (does it want to be checked)
//if not true/ continue
//add to variable if matches
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;