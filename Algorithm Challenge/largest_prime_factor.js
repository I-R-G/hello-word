/*
Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
    //function to verify if the number is prime
      function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0)
            return false;
        }
        return true;
      }
    // push the prime numbers that satisfy the function to a array
      let primesArr = [];
      for (let i = 2; i <= number; i++) {
        if (isPrime(i))
          primesArr.push(i)
      }
    //Divide the numbers by prime factors until it reaches 1 and reurn the last(bigger) prime factor
      let largest = 0
      for(let i = 0; i < primesArr.length; i++){
        if(number % primesArr[i] === 0 && number !== 1){
          number = number/primesArr[i]
          largest = primesArr[i]
          
        }
      }
      return largest
    }
    
console.log(largestPrimeFactor(2))
//2
console.log(largestPrimeFactor(3))
//3
console.log(largestPrimeFactor(5))
//5
console.log(largestPrimeFactor(7))
//7
console.log(largestPrimeFactor(8))
//2
console.log(largestPrimeFactor(13195))
//29
console.log(largestPrimeFactor(600851475143))
//6857
  