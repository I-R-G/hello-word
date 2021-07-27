/* 
Caesars CipherPassed

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 

In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 

Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but 
do pass them on.
*/

function rot13(str) {
// Limit ASCII code from A-Z
  let min = 65;
  let max = 90;
//Create array to receive the letters converted
  let decimalArr = [];
//Create array to receive the letters after rot13 application

  let strConvArr = [];
  for(let i = 0; i < str.length; i++){
    decimalArr.push(str.charCodeAt(i))
  }
//Sum + 13 to each element charCode
  for(let j = 0; j < decimalArr.length; j++){
    if(decimalArr[j]>=min && decimalArr[j]<=90){
      decimalArr.splice([j],1,decimalArr[j]+13)  
    }
// If is bigger than 90 go back to 65 and sum the difference 
    if(decimalArr[j] > max){
      decimalArr[j] = ((decimalArr[j] - max) + (min-1))
    }
//Convert in letters again
    strConvArr.push(String.fromCharCode(decimalArr[j])) 
  }
//Convert the array into a string 
  return strConvArr.join("")
}

const b = rot13("SERR YBIR?");

