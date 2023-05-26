// //Array


 const arry =[1, 2, 3, 4, 5, 'sahil']
console.log(arry[3]);

const arrays = new Array('sahil', 'sameer', 'imran')
console.log(arrays[2]);

// // ++++++++++++++++++++++++++++++++Method+++++++++++++++

arry.push(6)
arry.push(8)
arry.pop()

arry.unshift(8)
arry.shift()

console.log(arry.includes(7));
console.log(arrays.indexOf(2));

console.log(arry);

const value = arry.join()
console.log(arry);
console.log(typeof value);

// slice and splice

console.log("A", arry)
const anotherArray = arry.slice('1', '3')
console.log(anotherArray);

console.log("b", arry)
const arraysThree = arry.splice('1','3')
console.log("c", arry)
console.log(arraysThree);