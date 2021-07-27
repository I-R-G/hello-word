/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

var moveZeros = function moveZeros (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}

console.log((moveZeros([1,2,0,1,0,1,0,3,0,1])))
//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log((moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])))
//[9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log((moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9])))
//['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
