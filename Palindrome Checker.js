/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

//Solution

function palindrome(str) {
  var regex = /[a-zA-Z0-9]/
  str = str.toLowerCase();
  var arr = str.split('');
  var arr2 = arr.filter(val=>{
    if(regex.test(val) == true){
      return val;
    } 
  })
 
  var str2 = arr2.join('');
  var str3 = arr2.reverse().join('')
  if(str2 === str3)
    return true;
  else
    return false;

}

console.log(palindrome("A man, a plan, a canal. Panama"));
