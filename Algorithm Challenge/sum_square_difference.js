/*
Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/
function sumSquareDifference(n) { // Create the range and the square of each element in range
    let squares = []
    let range = []

    for (let i = 1; i <= n; i++) {
        range.push(i)
        squares.push(Math.pow(i, 2))
    }
    // Sum all element in square and sum all elements in range and calculate the square of then
    let sumOfTheSquares = squares.reduce((sumOfAll, sum) => sumOfAll + sum)
    let squareOfTheSum = Math.pow(range.reduce((sumOfAll, sum) => sumOfAll + sum), 2)

    // return the difference between then
    return(squareOfTheSum - sumOfTheSquares)
}

console.log(sumSquareDifference(10))
//2640
console.log(sumSquareDifference(20))
//41230
console.log(sumSquareDifference(100))
//25164150
