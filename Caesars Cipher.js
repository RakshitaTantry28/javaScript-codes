/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

//solution

function rot13(str) {
  var ArrNew = str.split('') ;
  var strNew='';
  console.log(ArrNew)
  var regex = /\W/;
  var regex1 = /[A-M]/;
  var regex2 = /[N-Z]/;
  for(let i=0;i<ArrNew.length;i++){
    if(ArrNew[i].match(regex)){
      strNew+=ArrNew[i];
    }
    else if(ArrNew[i].match(regex1)){
      ArrNew[i] = ArrNew[i].charCodeAt(0) + 13;
      strNew += String.fromCharCode(ArrNew[i])
    }
    else if(ArrNew[i].match(regex2)){
      ArrNew[i] = ArrNew[i].charCodeAt(0) - 13;
      strNew += String.fromCharCode(ArrNew[i])
    }
  }
  console.log(strNew)
  return strNew;
}

rot13("SERR PBQR PNZC"); // returns FREE CODE CAMP
rot13("SERR CVMMN!"); // returns FREE PIZZA!
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // returns THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

