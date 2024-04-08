// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)
// Array, Objects, Functions

const score = 100

// javascript is dynamically typed.

const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;  // this value is undefined right now.

const id =Symbol('123')
const anotherid = Symbol('123')

console.log(id==anotherid);

const bigNumber = 48611684613n

const heroes = ["Ironman", "Spiderman", "Captain America"]

let myObj = {
    name: "Chandril",
    age: 22,
}

const myFunction = function(){
    console.log("Hello WOrld");
}