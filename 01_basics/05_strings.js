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

console.log(url.replace('sahil', '20'))

console.log(url.includes('sahil'));

console.log(string.split('-'));