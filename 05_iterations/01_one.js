//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
    
}


// nested loop in javascript
for (let i = 1; i <= 10; i++) {
   // console.log(`outer value: ${i}`);
    
    for (let x = 1; x <= 10; x++) {
        //console.log(`outer value: ${x}`);  
    //    console.log(`${i} * ${x} = ${i*x}`);
        
    }
    
}



let Myarr = ["aryan","arun","jp","rishi"]

for (let i = 0; i < Myarr.length; i++) {
    const element = Myarr[i];
    //console.log(element);
    
}

// break and continue

for (let i = 0; i < 20; i++) {
    console.log(i);
    if (i == 5) {
        //console.log("Detected 5");
        break
    }    
}

for (let i = 0; i < 20; i++) {
    console.log(i);
    if (i == 5) {
        //console.log("Detected 5");
        continue
    }    
}

