/*
Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

function primeSummation(n) {
  
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
        }
        return true;
      }
     
    let primesArr = [];
    for(let i = 2; i < n; i++){
      if(isPrime(i)){
        primesArr.push(i)
      }
    }
    return primesArr.reduce((all, sum) => all + sum)   
  }
  console.log(primeSummation(17))
  //41
  console.log(primeSummation(2001))
  //277050
  console.log(primeSummation(140759))
  //873608362
  console.log(primeSummation(2000000))
  //142913828922