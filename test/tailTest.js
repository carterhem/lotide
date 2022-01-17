const tail = require('../tail.js');
const assertEqual = require('../assertEqual');
const chai = require('chai');
const assert = require('chai').assert;

describe("#tail", () => {
  const realCheck = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns 2 for the length of the new array", () => {
    assert.deepEqual(realCheck.length,2);
  })
  
  it("returns Lighthouse at index 0", () => {
    assert.deepEqual(realCheck[0], "Lighthouse");
  })
  
  it("returns Labs at index 1", () => {
    assert.deepEqual(realCheck[1], "Labs");
  })
  
  });
  

//test case 5 - checking to returned array elements to see if they work
// console.log("TestCase5: the actual test");
// const realCheck = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(realCheck.length,2);
// assertEqual(realCheck[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(realCheck[1], "Labs"); // ensure second element is "Labs"