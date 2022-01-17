//attempting to drive!

// const takeUntil = function (array, callback) {
//   /*Implement takeUntil which will keep collecting items from a 
//   provided array until the callback provided returns a truthy value.*/
//   let endStop = [];
// for(let j = 0; j < array.length; j++) {
//   if (j === 2) {
//     endStop.push(j);
//   } 
// }
 
// return endStop;
// }


const takeUntil = function (array, callback) {
  /*Implement takeUntil which will keep collecting items from a 
  provided array until the callback provided returns a truthy value.*/
const endStop = array.map(callback);//result will be new array with true and false values (callback is met or not met)

const indexPos = endStop.indexOf(true);// looking for the index postion of the first time callback is TRUE

//now that we have index, we need to take oringal array and use it to make new array with values before it
array.splice(indexPos, array.length)//splice the array - indexPos is place to start making changes, and remove the length of the array// deletecount will take a longer number than it has left and remove what it can
return array;

}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;
