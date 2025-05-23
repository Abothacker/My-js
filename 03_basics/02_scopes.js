// var a = 10
let b = 20
const c = 30
//scopes
{   let b = 100 // inner b 
    //console.log("Inerr: ",b);
}
//console.log("outer: ",b);

// function in function
function one() {
    let name = "Aryan"

    function two() {
        site : "youtube"
        console.log(name);
    }
    
    two()
}
one()



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// console.log(addone(5))   


const addTwo = function(num){
    return num + 2
}
addTwo(5)