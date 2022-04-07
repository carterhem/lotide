const flatten = function(input) {
  let endArray = [];
  //array to hold end result
 
  for(let item of input) {
    //looping through
    if(Array.isArray(item)) {
      //if the item is an array
      for(let x = 0; x < item.length; x++) {
        //loop through it
        endArray.push(item[x]);
        //push the item at x to endArray
      }
 
    } else {
      endArray.push(item);
      //if the item is not an array, we don't have to loop, can just push directly
    }
  }
  return endArray
  //dont forget to return!
 }
 
 console.log(flatten([1, 2, [3, 4], 5, [6]]))
 //calling and printing flatten