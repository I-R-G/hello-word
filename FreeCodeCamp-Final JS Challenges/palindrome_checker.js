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