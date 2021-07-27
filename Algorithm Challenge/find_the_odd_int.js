/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {

    const countEach = A.reduce(function(obj, item){
      if(!obj[item]){
        obj[item] = 0
      }
        obj[item]++
        return obj
    }, {})
  
    let objToArray = Object.entries(countEach)
    let oddElement;
    let oddValue = objToArray.forEach(function(element){
      if(element[1] % 2 !==0){
        oddElement = parseInt(element[0])
      }
    })
  
  return oddElement
}


 console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
 //5
 console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
 //-1
 console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
 //5
 console.log(findOdd([10]))
 //10
 console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
 //10
 console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
 //1

 

