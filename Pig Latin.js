/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

//Solution:
function translatePigLatin(str) {
  let regex = /^[aeiou]/i;
  let regex2 = /[aeiou]/i;
  if(!regex.test(str)){
    let x= str.indexOf(str.match(regex2))
    if(x==-1){
      return str+'ay';
    }
    return str.slice(x)+str.substr(0, x)+'ay';
  }
  else if(regex.test(str)){
    return str+'way';
  }
}

console.log(translatePigLatin("rhythm"));
