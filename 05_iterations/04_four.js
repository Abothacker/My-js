// for in

let myObj ={
    name : "aryan",
    age : 18,
    email : "a@aryan.com"
}

for (const [id] in myObj) {
    console.log(id);  // key
   console.log(myObj[id]);  // for value 

}


let arr = ['js', 'java', 'py', 'cpp']

for(const a in arr){
    // console.log(arr[a]);
    
}



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
