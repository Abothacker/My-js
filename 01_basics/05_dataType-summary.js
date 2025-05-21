//  Primitive  - primitive data type is a data type that represents a single, immutable value. These types are not objects and do not have methods.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Outpot => false


// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "hulk", "loki"];


let myObj = {
    name: "abot",
    age: 18
}

const myFunction = function(){
    console.log("Hey Abot");
}


// console.log(heros);
// console.log(myObj);
// console.log(myFunction());

// https://262.ecma-international.org/5.1/#sec-11.4.3

// --==-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=---=-=-=--=--=-=--=--=-==-=--=--=-=-=-=-=

// primitive  DataType  store in stack


let name = "rock"
let name2nd = name  // name2nd get copy of name 
name2nd ="ram"
console.log(name2nd);  //with new value
console.log(name);   // with old value 



//heap No-primitive  DataType  store in heap


let studentOne  ={
    name : "harry",
    age : 15
}

console.log(studentOne);

let studentTwo = studentOne  // studentTwo get  org value from studentOne

studentTwo.name = "ARYAN"

console.log(studentTwo);

console.log(studentTwo.name); // StudentTwo have new name

console.log(studentOne.name);// studentone also have same name 
