const eqArrays = function (actual, expected) {
 if (JSON.stringify(actual)===JSON.stringify(expected)){
   return true;
 } else {
   return false
 }
}

module.exports = eqArrays;

