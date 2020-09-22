/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

//Solution:
function diffArray(arr1, arr2) {
  var newArr = [];
  
  for(let i=0;i<arr2.length;i++){
    if(!arr1.includes(arr2[i]))
    {
      newArr.push(arr2[i]);
    }
  }
  for(let i=0;i<arr1.length;i++){
    if(!arr2.includes(arr1[i]))
    {
      newArr.push(arr1[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

