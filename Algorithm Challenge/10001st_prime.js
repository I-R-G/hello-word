/*
10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) { // Helper function to check if a number is prime
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) 
                return false;
            
        }
        return true;
    }
    // Create an array with all prime numbers and stops and returns the prime number at the index of the parameter passed
    let primesArr = [];

    for (let i = 2;; i++) {
        if (isPrime(i)) {
            primesArr.push(i)
            if (primesArr.length === n) {
                return primesArr[n - 1]

            }
        }
    }
}

console.log(nthPrime(6));
// 13
console.log(nthPrime(10))
//29
console.log(nthPrime(100))
//541
console.log(nthPrime(1000))
//7919
console.log(nthPrime(10001))
//104743
