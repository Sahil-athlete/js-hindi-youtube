//arrays 
const arrays = [0,1,2,3,4,5,6]
const superHeroes = ["spdiderman", "batman", "superman"]
const array = new String(0,1,2,3,4,5,) 
console.log(arrays[0]);

//METHODS


arrays.push(7)
arrays.unshift(8)
arrays.shift()
console.log(arrays);

console.log(arrays.includes(3));
console.log(arrays.indexOf(5));

const arrays3 = arrays.join()
console.log(arrays);
console.log(arrays3);
console.log(typeof arrays3);

// slice splice 

console.log("A " , arrays);

const myna1= arrays.slice(1,3)
console.log(myna1);

console.log("B " , arrays); //slice method dosn't change in the original refrence.

console.log("C " , arrays);

const myna2 = arrays.splice(1,3)
console.log(myna2);

console.log("D " , arrays); //splice method change in the original refrence.
