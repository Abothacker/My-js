// object literals


let myobject = {
    name: "Aryan",
    age : 18
}

// console.log(myobject);

// console.log(myobject.name); 
// console.log(myobject["name"]);

//------- Symbol in Object ---//

let mysym = Symbol("key1")

let object_with_symbol = {
    name: "rock",
    age : 50,
    [mysym] : id
}

console.log(object_with_symbol);

console.log(object_with_symbol[mysym]);

console.log(typeof object_with_symbol[mysym]);


