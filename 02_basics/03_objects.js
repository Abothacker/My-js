let myobject = {
    name: "Aryan",
    age : 18
}

// console.log(myobject);

// console.log(myobject.name); 
// console.log(myobject["name"]);

//------- Symbol in Object ---//

let mysym = Symbol("key1")

let objNew = {
    name: "arun",
    age : 17,
    sym :mysym
}
console.log(typeof objNew["sym"]);