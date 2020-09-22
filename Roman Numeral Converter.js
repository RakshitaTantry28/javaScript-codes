// Convert the given number into a roman numeral.

//Solution:

function convertToRoman(num) {
  var roman = {
    1: 'I', 
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',					
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',			
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
  }
  var numArr =[];
  var rem;  
  while(num>0){
    rem = num%10;
    numArr.push(rem);
    num=parseInt(num/10);
  }
  console.log(numArr)

  for(let i=0;i<numArr.length;i++){
    numArr[i] = numArr[i] * Math.pow(10,i);
  }
console.log(numArr)

var result = '';
for(let i = numArr.length-1;i>=0;i--){
  if(numArr[i]==0)
    continue
  if(numArr[i]>1000 && numArr[i]<4000)
    result += roman[1000].repeat(numArr[i]/1000);
    else
      result += roman[numArr[i]]
}

console.log(result)

 return result;
}

convertToRoman(5014);
