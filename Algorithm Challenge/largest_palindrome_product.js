/*
Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
//Function to check if the number is a palindrome
  function isPalindrome(number){
    let reversedNumber = number
    .toString()
    .split("")
    .reverse()
    .join("")

    if(reversedNumber == number){
        return true
    }
    return false
  }
//Get the maximum and minimum number with n number of digits, also set the array which will receive all the palindrome products 
  let maxNum = Math.pow(10,n) - 1;
  let minNum = Math.pow(10,n-1)
  let palindromeProducts = [];
  let products;
//Create two multiples all numbers in the range for each other and get their products
  for(let i = maxNum; i >=minNum; i--){
    for(let j = maxNum; j >=minNum; j--){
      products = i*j
//If the product is a palindrome its pushed in the array 
      if(isPalindrome(products)){
        palindromeProducts.push(products)
      }
    }
  }
//Return the maximum number in the array
  return Math.max(...palindromeProducts)
}

console.log(largestPalindromeProduct(2))
//9009
console.log(largestPalindromeProduct(3))
//906609
