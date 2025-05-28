// -----------------------------------------------  1.  for loop

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }


// // for loop in array

// let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// // for loop in object

// let myObj = {
//     name: "Aryan",
//     age: 15,
//     roll: 37032,
//     roomNo: 17
// }

// // Way no 1
// let objKeys = Object.keys(myObj)

// for (let i = 0; i < objKeys.length; i++) {
//     let accKey = objKeys[i]
//     console.log(accKey, myObj[accKey]);
// }

// // way no 2

// let arrEntries = Object.entries(myObj)
// for (let i = 0; i < arrEntries.length; i++) {
//     let [k, v] = arrEntries[i]
//     console.log(k);
//     console.log(v);
// }

// -----------------------------------------------  .2  for in loop

// let name = "aryan"

// for (const key in name) {
//     // console.log(key);
//     console.log(name[key]);
    
// }


// for in loop in array
// let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]
// for (const key in arr) {
//     // console.log(key);
//     console.log(arr[key]);
// }


// for in loop in object

let myObj = {
    name: "Aryan",
    age: 15,
    roll: 37032,
    roomNo: 17
}

// Way no 1
let objKeys = Object.keys(myObj)

for(let key in objKeys){
    // console.log(key);

    // console.log(objKeys[key]);
    console.log(myObj[objKeys[key]]);
    
    
}