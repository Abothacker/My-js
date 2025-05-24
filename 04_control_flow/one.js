// if and else 

const temperature = 45
if (temperature < 50){
    console.log("temperature is less than 50");
    
}
else if (temperature > 100){
    console.log("temperature is more than 100");
}
else{
    console.log("temperature ");
}


//---------- logic AND => &&, OR => || , NOT => !=

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {   // all need true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //  any True Or flash
    console.log("User logged in");
}