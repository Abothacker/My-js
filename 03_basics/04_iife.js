// function  chai() {
//     console.log("Chai Chai...")
// }

// chai()


(function  chai() {
    // named IIFE
    console.log("Chai Chai...  ")
}) ();    // this is iife in function


// iife in arrow function ()=> {}
(()=> {
    console.log("Chai Chai... 2  ")
}) ();    // this is iife 


((name)=> {
    console.log(`My name is ${name}.. `);
    
})("Aryan");