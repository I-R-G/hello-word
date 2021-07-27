/*
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return 
these squares as a string in the format "bigger-smaller"

Examples :
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9
*/

const findSquares = num => {
  
    let bigger = Math.pow(parseInt(num/2) + 1, 2)
    let smaller = Math.pow(parseInt(num/2), 2)
  
    return bigger + "-" + smaller
};

console.log(findSquares(9))
//25-16
console.log(findSquares(5))
//9-4