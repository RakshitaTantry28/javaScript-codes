/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

//Solution:
function uniteUnique(arr) {
  var args =Array.prototype.slice.call(arguments);
  var arr1 =[];
  for(let i=0;i<args.length;i++){
    for(let j=0;j<args[i].length;j++){
      if(!arr1.includes(args[i][j])){
        arr1.push(args[i][j]);
      }
    }
  }
  console.log(arr1)
  return arr1;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
