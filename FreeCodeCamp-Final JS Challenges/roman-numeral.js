/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
 
  const toObj = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: "CM", 1000: "M"
  };

  const numeral = Object.keys(toObj).map(x => parseInt(x)).reverse()

  let roman = "";
  for(let i = 0; i < numeral.length; i++){
  
    while (num >= numeral[i]){
      roman += toObj[numeral[i]]
      num -= numeral[i]
    } 
  }
  return roman
}

const a = convertToRoman(36);
console.log(a)