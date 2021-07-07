/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation,

case, and spacing. 

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn 

everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/



function palindrome(str) {

//Create a regex to find and the unwanted characters
  let regex = /\W+|\s+|_+/gi;

//Create a clean string with just alphanumeric characters and no space and split it into a array of letters.
  let cleanStr = str
  .toLowerCase()
  .replace(regex, "")

//Create and empty array which will receive the elements of the first array in the reverse order
  let reverse = []
  for(let i = 0; i < cleanStr.length; i++){
    reverse.unshift(cleanStr[i])
  }
  
//Compare both strings and return true or false
  if(reverse.join("") === cleanStr){
   
    return true;
  }
  return false 
}
let a = palindrome("eye");

console.log(a)