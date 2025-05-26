//  for each loop

let heros =["iron man", "hulk", "thor", "loki", "spiderman"]

//--------------  1
// heros.forEach(function (item){
//     console.log(item); 
// })

//------------------ 2 
// arrow function 
// heros.forEach( (item) => console.log(item))

// ---------------- 3
// function printMe(item) {
//     console.log(item);
// }

// heros.forEach(printMe)

// ------------- 4
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})