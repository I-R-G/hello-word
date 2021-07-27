/*
Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) { // Create the range of numbers to verify
    let range = [];
    for (let i = 1; i <= n; i++) {
        range.push(i)
    }
    // Create a range of numbers to test if they are multiples of the number in range
    let bigNum = Math.max(... range)
    for (let i = bigNum;; i++) {
        if (isMMC(range, i)) {
            return i
        }
    }
}
// Function to check if a number is multiple
function isMMC(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] !== 0) {
            return false
        }
    }
    return true
}

console.log(smallestMult(5))
// 60
console.log(smallestMult(7))
// 420
console.log(smallestMult(10))
// 2520
console.log(smallestMult(13))
// 360360
console.log(smallestMult(20))
// 232792560
