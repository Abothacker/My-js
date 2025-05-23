function sayMyname(name) {

    console.log(`My name is : ${name}`);
    
    
}

// sayMyname("Aryan")
// sayMyname("Arun")
// sayMyname("rishi")


function add(num1,num2){

    // console.log(`${num1} + ${num2} = ${num1 + num2}`);
    return num1 + num2
    
}
let result = add(2,5)
//console.log(result);



// function userLogin(userName) {


//     if (!userName) {
//         console.log("pls enter a username");
//         return
//     }

//     // -------------Both are same---------

//     // if (userName === undefined) {
//     //     console.log("pls enter a username");
//     //     return
//     // }
    
//     return `${userName} Welcome you just login `
// }

// console.log(userLogin("aryan"));

function userLogin(userName = "robot ") {   // robo is a defualt userName 
    return `${userName} Welcome you just login `
}

// console.log(userLogin());


function calculateCart(...price1) {
    return price1

}

// console.log(calculateCart(50)); // for one value 
//console.log(calculateCart(50, 100, 230, 200));   // multi value



//--------------------------------  Object in Function ------------------//

let userName = {
    name :"Aryan",
    age : 18
}

function objectInfun(anyobject) {
    console.log(`My name is ${anyobject.name} and My age is ${anyobject.age}`); 
}
// objectInfun(userName)



//---------------- array in function -----//
let myArr = [32, 50, 57, 11]

function getSecondValue(anyArray) {
    return anyArray[1] // second value at index 1
}

console.log(getSecondValue(myArr)); // OutPut => 50
