/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    return [...new Set(Array.from(s1.concat(s2)))].sort((a,b) => a > b ? 1 : -1).join("")
}

console.log(longest("aretheyhere", "yestheyarehere"))
//aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
//abcdefghilnoprstu
console.log(longest("inmanylanguages", "theresapairoffunctions"))
//acefghilmnoprstuy