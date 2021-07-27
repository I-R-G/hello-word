/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the
symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    return arr1.filter(n => !arr2.includes(n)).concat(arr2.filter(n => !arr1.includes(n)))
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//[4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//['pink wool']
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//['pink wool', 'diorite']
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))
//[]
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
//['piglet', 4 ]