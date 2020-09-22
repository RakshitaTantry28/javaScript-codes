/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

//Solution:

function smallestCommons(arr) {
  var min= Math.min(...arr);
  var max = Math.max(...arr);
  console.log(max,min)
  let solution = max;

  for (let i = max - 1; i >= min; i--) {
    if (solution % i) {
      solution += max;
      i = max;
    }
  }
  return solution;
}


console.log(smallestCommons([1,5]));

