/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements
 of the original arrays.
*/

function flatten(arr) {
    return arr.reduce((element, item) => element = element.concat(item), [])
}

// console.log(flatten([[1, 2, 3], [4, 5], [6]]))
// [ 1, 2, 3, 4, 5, 6 ]


/*
Your own loop
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, 
and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls
 the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value)
    }
}

// loop(3, n => n > 0, n => n - 1, console.log)

/*
Everything
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element
in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one 
using the some method.
*/

function everyUsingLoop(array, test) {
    const failedTest = array.filter(element => ! test(element))
    return failedTest.length === 0 ? true : false
}

// console.log(everyUsingLoop([1, 3, 5], n => n < 10));
// → true
// console.log(everyUsingLoop([2, 4, 16], n => n < 10));
// → false
// console.log(everyUsingLoop([], n => n < 10));
// → true

function every(array, test) {
    if (array.some(element => ! test(element))) {
        return false
    }
    return true
}

// console.log(everyUsingLoop([1, 3, 5], n => n < 10));
// → true
// console.log(everyUsingLoop([2, 4, 16], n => n < 10));
// → false
// console.log(everyUsingLoop([], n => n < 10));
// → true

/*
Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property 
that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and 
countBy functions defined earlier in the chapter are probably useful here.
*/


const SCRIPTS =  require('./scripts')


function dominantDirection(text) {
    const charCode = text.split("").map(x => x.charCodeAt())

    const ranges = SCRIPTS.flatMap(x => x.ranges)

    let withInRange = []
    ranges.filter(function (item) {
        for (let char of charCode) {
            if (char >= Math.min(... item) && char <= Math.max(... item)) {
                withInRange.push(item)
            }
        }
    })
    let filteredObj = []
    SCRIPTS.filter(function (instances) {
        for (let range of withInRange) {
            if (instances.ranges.includes(range)) {
                filteredObj.unshift(instances)
            }
        }
    })

    const countNames = filteredObj.reduce(function (obj, item) {
        obj[item.name] = (obj[item.name] ? obj[item.name] : 0) + 1;
        return obj;
    }, {});

    const keys = Object.keys(countNames)

    for (let key of keys) {
        if (countNames[key] === Math.max(...Object.values(countNames))) {
            return [...new Set(filteredObj.filter(instance => instance.name === key).map(dominantDirection => dominantDirection.direction))].join("")
        }
    }
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
