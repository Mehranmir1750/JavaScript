// Primitive dataTypes
// call be value => primitve

// 7 types : String, Number, Boolean , null ,undefined, Symbol, BigInt


const score = 100 
// JavaScript is a dynamically typed language
// because You don’t need to declare type of variable


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);




// Referemce (non-Primitive) Data Types

// Array, Objects, Functions


const heros = ["fayaz", "gulzar", "javed"]  //array

let myObject = {
    name: "mehran",
    age: 23,
}

const myFunction = function(){
    console.log("hello from function");

}

console.log(typeof myFunction);
