/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
  let arr2 = [];
  var args = Array.prototype.slice.call(arguments);

  for(let i=0;i<arr.length;i++){
    if(!args.includes(arr[i])){
      arr2.push(arr[i]);
    }
  }
  console.log(arr2)
  return arr2;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

