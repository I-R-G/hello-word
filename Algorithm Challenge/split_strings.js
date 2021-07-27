/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(str) {

    if (str.length % 2 !== 0) {
        str += "_"
    }
    let pairs = []
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.charAt(i) + str.charAt(i + 1))
    }
    return pairs
}

console.log(solution('abc'))
//[ 'ab', 'c_' ]
console.log(solution('abcdef'))
//[ 'ab', 'cd', 'ef' ]