/*
Flatten a nested array. You must account for varying levels of nesting.
*/

//solution

function steamrollArray(arr) {
var newArr = []
insertArrY(arr)
function insertArrY(arr){
    if(!Array.isArray(arr)){
        newArr.push(arr);
    }
    else{
      for(var i in arr){
        insertArrY(arr[i])
      }
    }
}
  
  console.log(newArr)
  return newArr;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));

