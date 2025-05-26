// reduce 
// let myarr = [1,2,3]

// let total = myarr.reduce(   (acc, carval)=> {
//     console.log(`acc : ${acc} and carval: ${carval}`);
//     return acc + carval
// },0 )

// let total = myarr.reduce(function(acc, carval) {
//     console.log(`acc : ${acc} and carval: ${carval}`);
//     return acc + carval
// },0 )

// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// ----------------- doing by forof loop 
// let arrPrice = []
// for (const key of shoppingCart) {
//     arrPrice.push(key.price)
// }

// let total =arrPrice.reduce( (acc,carval)=> {
//     console.log(`car : ${acc} and carval : ${carval}`);
    
//     return acc + carval
// },0)

// console.log(total);


//---- by using reduce

let total = shoppingCart.reduce((acc,carval) => acc + carval.price,0)
console.log(total);

