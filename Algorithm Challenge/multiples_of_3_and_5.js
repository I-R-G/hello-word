/*
Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
    //Create an array with all number below the number given as a parameter 
    let range = []
    for(let i = 1; i < number; i++){
      range.push(i)
    }
    //verify if the numbers are multiples of 3 or 5 ,and if true, push then into multiplesArr
    let multiplesArr = []
    for(let i = 0; i< range.length; i++){
      if(range[i] % 3 === 0 || range[i] % 5 === 0){
        multiplesArr.push(range[i])
      }
    }
    //return the sum of all elements in multiplesArr
      return multiplesArr.reduce((sumOfAll, sum) => sumOfAll+sum)
    }
    
console.log(multiplesOf3and5(10))
//23
console.log(multiplesOf3and5(1000))
//233168
   