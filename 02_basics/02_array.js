const marvel_heros = ["thor", "iron man", "spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)//bad way to add array
// console.log(marvel_heros);  



//--------------- add two array ----------------//

let both = marvel_heros.concat(dc_heros) //Way 1 to add array

// console.log(both);


let allHeros = [...marvel_heros,...dc_heros]  // way 2 to add array 
// console.log(allHeros);


//---------------------- array in array in array --------------//


let myArr =[1, 2, 3, [4, 5, 6], 7 ,[7, 8, 9]]

// console.log(myArr);
// //convert into all in one array 

let all_in_one = myArr.flat(Infinity) // if need to add a number in place of infinity 

// console.log(all_in_one);


//----------------

console.log(Array.isArray(all_in_one));  // if array exist then OP=> true

console.log(Array.from("Aryan")); // string into array 
console.log(Array.from({name : "rocky"}));



let score = 100
let score2 = 200
let score3 = 300

let allScore = Array.of(score,score2,score3)
console.log(allScore);


