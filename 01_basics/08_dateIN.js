
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

console.log(newDate.getFullYear());

console.log(newDate.getDay());




console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    month:"long",
    year : "numeric",
    
    // year :"numeric"
    
}));
