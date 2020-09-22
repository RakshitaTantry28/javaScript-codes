/*Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


//solution:
function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  var updateWords= [];

  for(let i=0;i<words.length;i++){
    updateWords[i] = words[i].replace(words[i][0],words[i][0].toUpperCase());
  }
 console.log(updateWords.join(' '))
  return updateWords.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

