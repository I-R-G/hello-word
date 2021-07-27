/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string 
"The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s){
    const regex = /\d{1,}/ig
    const onlyNum = s.match(regex)
    
    return !!onlyNum ? onlyNum.map(x => parseInt(x)).reduce((a,b) => a + b) : 0;
}

console.log(sumOfIntegersInString("Dogs are our best friends."))
//0
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."))
//18
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
//3635