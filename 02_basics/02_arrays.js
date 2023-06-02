const names = ["rahil", "sahil", "imran"]
const names2 = ["salman", "rizwan", "rehan"]

names.push(names2);
console.log(names);
console.log(names[3][1]);

names.concat(names2)
console.log(names);

const newCon = names.concat(names2)
console.log(newCon);

const newCat = [...names , ...names2]
console.log(newCat);

const another_Array = [1,2,3,4,5,[11,12,13],3,4,5,[112,221,11,[111,112,113]]]
const news = another_Array.flat(Infinity);
console.log(news);

console.log(Array.isArray("sahil"))
console.log(Array.from("sahil"))
console.log(Array.from({name : "sahil"}));

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c));

