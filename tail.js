// original function
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😂😂😂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//tail function
const tail = function(arr) {
  return arr.slice(1);
};

//test case 1 - original array hasn't been altered
console.log("TestCase1: Original Array");
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);

//test case 2 - one element should yield empty array for tail
console.log("TestCase2: One Element");
assertEqual(tail(["Hello"]), "Lighthouse", "Labs");

//test case 3 - empty array yields empty array
console.log("TestCase3: Empty Array");
assertEqual(tail([]), "Lighthouse", "Labs");

//test case 4 - testing that items still in an array won't match items not in an array
console.log("TestCase4: Basic");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");

//test case 5 - checking to returned array elements to see if they work
console.log("TestCase5: the actual test");
const realCheck = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(realCheck.length,2);
assertEqual(realCheck[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(realCheck[1], "Labs"); // ensure second element is "Labs"