const myName = "sahil"
const runs = 1223

console.log(myName + runs  + "value");

console.log(`my name is ${myName} and my runs in first innings = ${runs}`);

const string= new String("freess-cftu-sahiul")

console.log(string[3]);

console.log(string.__proto__);

console.log(string.length);
console.log(string.toUpperCase());
console.log(string.charAt(1));
console.log(string.indexOf('l'));

const newString = string.substring(0,4)
console.log(newString);

const anotherString = string.slice(-18, 4)
console.log(anotherString);

const newStringOne = "          sahil      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahilkhan.com/khan123%30"

console.log(url.replace('sahil', '.com'));

console.log(url.includes('FALSE'));

const checkArray = 'i-am-a-boy'
const newArray =checkArray.split('-')
console.log(newArray);

const array = [ 2, 12, 32, 42];
let sock = 1;
console.log(`the value of ${sock} is the value of ${array.at(sock)}`);
sock = -2;
console.log(`the value of ${sock} is the value of ${array.at(sock)}`);