//Dates

let currentDate = new Date()
console.log (currentDate.toDateString());
console.log (currentDate.toISOString());
console.log (currentDate.toJSON());
console.log (currentDate.toLocaleDateString());
console.log (currentDate.toLocaleTimeString());
console.log (currentDate.toTimeString());
console.log (currentDate.toUTCString());
console.log (currentDate.getTimezoneOffset());
console.log(typeof currentDate);


let createDate = new Date(2023, 00, 23)
let create = new Date(2023, 00, 23, 5, 23, 21)
let ate = new Date("2023-01-21")
let createDate3  = new Date("01-05-2023")
console.log(createDate.toLocaleString());

let timeStamp = Date.now()

console.log(timeStamp);
console.log(createDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());

console.log(`${newDate} is the date`)

newDate.toLocaleString('default', {
    weekday: "long",
})