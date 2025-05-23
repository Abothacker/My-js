// singleton
// Object.create
let myObj = {}
myObj.name = "arun"
myObj.age = 17

// console.log(myObj);

let user = {
    fullname : {
        userName : {
            name : "rock",
            age : 50
        }
    }
}

//console.log(user);
//console.log(user.fullname.userName.name);


//  combine objects

let obj1 ={ 1: "A", 2: "B"}
let obj2 ={ 3: "A", 4: "B"}
let obj3 ={ 5: "A", 6: "B"}


// let allObj = {obj1, obj2, obj3}


let allObj = {...obj1,...obj2,...obj3}
//console.log(allObj);

let allObj2 = Object.assign({},obj1,obj2,obj3)
//console.log(allObj2);


console.log(user);
//console.log(user.fullname.userName.name);
