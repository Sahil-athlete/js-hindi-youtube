const number = 300;
console.log(number);

const anotherNumber =  new Number('100');
console.log(anotherNumber);

console.log(anotherNumber.toString());
console.log(anotherNumber.toString().length);
 
console.log(anotherNumber.toFixed(2));

const big = 100.3227
console.log (big.toPrecision(6));

const bigNumber = 100000000;
console.log(bigNumber.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs('2.3'));
console.log(Math.round('2.3')); 
console.log(Math.ceil('2.3'));
console.log(Math.floor('3.4'));
console.log(Math.min('2.3', 4, 3 ,5, 5));
console.log(Math.max('2.3', 4, 3 ,5, 5));

console.log(Math.random());

console.log(Math.floor(Math.random()* 10)+ 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

//console.log(Math.floor(Math.random() * (max - min + 1) + min)); this is the formula for random value with condition