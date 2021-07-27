/*
Regexp golf
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

1)car and cat

2)pop and prop

3)ferret, ferry, and ferrari

4)Any word ending in ious

5)A whitespace character followed by a period, comma, colon, or semicolon

6)A word longer than six letters

7)A word without the letter e (or E)
*/

//1


function tester1 (str){
    const regex = /ca[t|r]/gi
    return regex.test(str)
}

//console.log(tester1("my car"))
//true
//console.log(tester1("bad cats"))
//true
//console.log(tester1("camper"))
//false
//console.log(tester1("high art"))
//false


//2
function tester2(str){
    const regex = /pr?op/gi
    return regex.test(str)
}

//console.log(tester2("pop culture"))
//true
//console.log(tester2("mad props"))
//true
//console.log(tester2("plop"))
//false
//console.log(tester2("prrrrop"))
//false

//3
function tester3(str){
    const regex = /ferr((et)|y|ari)/gi
    return regex.test(str)
}

//console.log(tester3("ferret"))
//true
//console.log(tester3("ferry"))
//true
//console.log(tester3("ferrari"))
//true
//console.log(tester3("ferrum"))
//false
//console.log(tester3("transfer A"))
//false

//4
function tester4(str){
    const regex = /(ious)\b/gi
    return regex.test(str)
}

//console.log(tester4("how delicious"))
//true
//console.log(tester4("spacious room"))
//true
//console.log(tester4("ruinous"))
//false
//console.log(tester4("consciousness"))
//false

//5
function tester5(str){
    const regex = /\s[.,:;]/g
    return regex.test(str)
}

//console.log(tester5("bad punctuation ."))
//true
//console.log(tester5("escape the period"))
//false

//6
function tester6(str){
    const regex = /\w{7}/g
    return regex.test(str)
}

//console.log(tester6("Siebentausenddreihundertzweiundzwanzig"))
//true
//console.log(tester6("no"))
//false
//console.log(tester6("three small words"))
//false

//7 

function tester7(str){
    const regex = /\b[^\We]+\b/i
    return regex.test(str)
}

//console.log(tester7("red platypus"))
//true
//console.log(tester7("wobbling nest"))
//true
//console.log(tester7("earth bed"))
//false
//console.log(tester7("learning ape"))
//false
//console.log(tester7("BEET"))
//false

/*
Quoting style
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the 
dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/

function replacing(str){
    const regex = /\s'|'\s|^'|'$/gi
    return str.replace(regex, '"')

}

//console.log(replacing("'I'm the cook,' he said, 'it's my job.'"))
//"I'm the cook,"he said,"it's my job."

/*
Numbers again
Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the 
decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for 
there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a 
lone dot isn’t.
*/

function jsNumMatch(str){
    const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/
    return regex.test(str)

}

/*
console.log(jsNumMatch("1"))
console.log(jsNumMatch("-1"))
console.log(jsNumMatch("+15"))
console.log(jsNumMatch("1.55"))
console.log(jsNumMatch(".5"))
console.log(jsNumMatch("5."))
console.log(jsNumMatch("1.3e2"))
console.log(jsNumMatch("1E-4"))
console.log(jsNumMatch("1e+12"))
true
*/
/*
console.log(jsNumMatch("1a"))
console.log(jsNumMatch("+-1"))
console.log(jsNumMatch("1+1"))
console.log(jsNumMatch("1.2.3"))
console.log(jsNumMatch("1e4.5"))
console.log(jsNumMatch(".5."))
console.log(jsNumMatch("1f5"))
false
*/