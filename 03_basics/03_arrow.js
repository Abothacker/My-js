let myObj = {
    name: 'Aryan',
    age : 17,
    fun : function(){
        // console.log(`${name}  welcome to Website !..`);  // Not working 
        //console.log(`${this.name}  welcome to Website !..`); // working this.name
        
    }
}
 
myObj.fun()
//console.log("all good");

///--------------------------- Arrow function ---------------------------//

// let addTwo =  (num1, num2) =>{
//     return num1 + num2   
// }

// let addTwo =  (num1, num2) => (                 // if use ()  no need to return a function
//     num1 + num2
// )



// --------------    implicit return -------------------//  

// let addTwo =  (num1,num2) => num1 + num2   // also working 
let addTwo =  (num1,num2) => (num1 + num2 ) 

console.log(addTwo(2,5));
