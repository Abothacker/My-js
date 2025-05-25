//for of  in array

arr =["aryan", "ram", "rock", "jp"]
for (const a of arr) {
    // console.log(a);

}

// maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const m of map) {
//     console.log(m);
// }

for (const [key,value] of map) {
    // console.log(key,value);
}



let myObj ={
    name : "aryan",
    age : 18,
    email : "a@aryan.com"
}



// not working for of in object

// for (const [k,v] of myObj) {
//     console.log(k,v);
    
// }