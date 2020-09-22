/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

//Solution:
function spinalCase(str) {
  console.log(str.split(/\s+|_+|(?=[A-Z])/g))
  return str.split(/\s+|_+|(?=[A-Z])/g).join('-').toLowerCase();    // ?= means positive lookahead where in it looks for the exp present or not
}

console.log(spinalCase('thisIsSpinalTap'));

