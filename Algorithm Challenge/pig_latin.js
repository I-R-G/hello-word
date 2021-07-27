/*
Pig LatinPassed
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const regex = /^[^aeiou]+/gi
    const test = regex.test(str)
  
    return test ? str.replace(regex,"") + str.match(regex) + "ay" : str + "way"  
}

console.log(translatePigLatin("california"))
//aliforniacay
console.log(translatePigLatin("paragraphs"))
//aragraphspay
console.log(translatePigLatin("glove"))
//oveglay
console.log(translatePigLatin("algorithm"))
//algorithmway
console.log(translatePigLatin("schwartz"))
//artzschway
console.log(translatePigLatin("rhythm"))
//rhythmay
console.log(translatePigLatin("eight"))
//eightway

