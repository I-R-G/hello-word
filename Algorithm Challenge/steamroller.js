
/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
    const flatten = [].concat(...arr)
    return flatten.some(item => Array.isArray(item)) ? steamrollArray(flatten) : flatten    
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
//[ 1, 2, 3, 4 ]
console.log(steamrollArray([1, [], [3, [[4]]]]))
//[ 1, 3, 4 ]    
console.log(steamrollArray([1, {}, [3, [[4]]]]))
//[ 1, {}, 3, 4 ]