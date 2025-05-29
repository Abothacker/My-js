// -----------------------------------------------  1.  for loop

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }


// // for loop in array

// let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// // for loop in object

// let myObj = {
//     name: "Aryan",
//     age: 15,
//     roll: 37032,
//     roomNo: 17
// }

// // Way no 1
// let objKeys = Object.keys(myObj)

// for (let i = 0; i < objKeys.length; i++) {
//     let accKey = objKeys[i]
//     console.log(accKey, myObj[accKey]);
// }

// // way no 2

// let arrEntries = Object.entries(myObj)
// for (let i = 0; i < arrEntries.length; i++) {
//     let [k, v] = arrEntries[i]
//     console.log(k);
//     console.log(v);
// }

// -----------------------------------------------  .2  for in loop

// let name = "aryan"

// for (const key in name) {
//     // console.log(key);
//     console.log(name[key]);
    
// }


// // for in loop in array
// let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]
// for (const key in arr) {
//     // console.log(key);
//     console.log(arr[key]);

// }


// for in loop in object

// let myObj = {
//     name: "Aryan",
//     age: 15,
//     roll: 37032,
//     roomNo: 17
// }

// // Way no 1
// let objKeys = Object.keys(myObj)

// for(let key in objKeys){
//     // console.log(key);

//     // console.log(objKeys[key]);
//     console.log(myObj[objKeys[key]]);
    
    
// }



// ---------------   For of loop
// let name = "aryan"
// for (const element of name) {
//     console.log(element);
    
// }


// //  for of loop in array
//  let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]
// for (const element of arr) {
//     console.log(element);
    
// }


// map 

// let mymap =new Map()
// mymap.set("Py","Python")
// mymap.set("JS","Javascript")
// mymap.set("cpp","c++")

// console.log(mymap.has('Py'));
// console.log(mymap.size);
// console.log(mymap.values());

// // for of  loop in map 
// for (const [key , values] of mymap) {
//     console.log(key,values);
// }



// for of loop in object
// let myObj={
//     name : 'aryan',
//     age :15,
//     rollno : 500
// }
// for (const [key, value] of myObj) {
//     console.log(key,value);
    
// }


// //-------------------   for Each
// let arr = ["Aryan", "Arun", "jp", "rishi", "deva"]

// arr.forEach(   function (item){
//     console.log(item);
    
// })

// // arrow function
// arr.forEach(   (item)=>{
//     console.log(item);
    
// })

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



// for (let i = 0; i < myCoding.length; i++) {
//     const element = myCoding[i].languageName;
//     console.log(element);
    
    
// }

// myCoding.forEach(  function(lang) {
//     // return lang
//     console.log(lang.languageName);
    
// })



//---------------   Filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// console.log(books);
let byFilter = books.filter(function (bk){
    return bk.publish >= 2000
    
} )


// console.log(byFilter);
// console.log( typeof byFilter);


for (const key in byFilter) {

    // console.log(key);
    // console.log(byFilter[key]);
    console.log(byFilter[key].title);
    

}