//Primitives: number, string, booleans
//More complex types: arrays, objects
//Funtion types, parameters

//Primitives

let age: number = 12;

let userName: string;
userName = "Max"

let isInstructor :boolean;

isInstructor = true

//More complex types

let hobbies: string[]

hobbies = ["ian", "jack"] //if you insert !== string get an error

type Person = {
    name: string
    age: number
}

/*
let person : {
    name: string
    age: number
}
*/

let person : Person

person = {
    name : "ian",
    age: 31
}

//person = {
//    isEmployee: true
//}

let people: {
    name: string
    age: number
}[]

//Type inferrence

let course = "ian"

//course = 10

//Union types

let example : string | number 

example = "ian"
example = 10

//Functions and types

function add(a:number, b:number): number{ // last one is the type of the return 
    return a + b
}

//void because it returns nothing
function print (value: any){
    console.log(value)
}

//Generics

function insertAtTheBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}

const updatedArray = insertAtTheBeginning([1, 2, 3], -1) // [-1, 1, 2, 3]
const stringArray = insertAtTheBeginning(["a", "b", "c"], "a")

//updatedArray[0].split("")