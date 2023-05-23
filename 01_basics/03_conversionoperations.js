let score = "true"

console.log(typeof score);

console.log(typeof(score));

let  valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// "true" => 1 ; false => 0

let isLoggedIn = "hitesh"

let booleanNumber = Boolean(isLoggedIn);

console.log(booleanNumber);

// 1 => true
// 0 => false
// "" => false 
// "hitesh" => true

let india = 1233

let stringNumber = String(india)
console.log(stringNumber);
console.log(typeof stringNumber);

// in the conversion method we can assign any variable name.
// the formula is 
// let any name of variable = datatype(variable which we wnt to change);
// console.log(any name of the variable);