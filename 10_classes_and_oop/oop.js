//----------------------- 1 Object literal

const user = {
    userName : "aryanjaiswar",
    loginCount : 5,

    getUserDetails : function(){
    // console.log(`User Name is:  ${user.userName}`);
    
}
}
// console.log(this);

// console.log(user.loginCount);
// console.log(user.getUserDetails());



//--------------------- 2 Constructor function

function User(Name, age) {

    this.Name = Name;
    this.age = age;

    this.getfun = function(){
        console.log(`welcome ${this.Name}`);
        
    }
    return this
}

const userOne = new User("Arayn", 18)
const userTwo = new User("JP", 20)

console.log(userOne);
console.log(userTwo);
