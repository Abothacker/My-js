//while loop

// let i = 1
// while(i < 5){
    //    console.log(i);
    //    i++ 
    // }
    
    
//while loop  in array
// let arr =["aryan", "rock", "arun", "jp"]
// let i = 0
// while (i < arr.length) {
//    // console.log(arr[i]);
//     i++
    
// }

//while loop  in object 
let myObj ={
    name : "aryan",
    age: 16,
    email :"aryan@gmail.com"
}

let i = 0
let arr = Object.keys(myObj)

while (i < arr.length) {
    console.log(myObj[arr[i]]);
    i++
    
}


