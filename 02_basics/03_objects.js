// objects can declaired through 2 types  1 is constructer, 2 is literals 
//sigleton made throuth only constructer not literals

// singleton 
//object.create   

// object literals
const sym = Symbol("sahil")
const newObj={
    name: "sahil", 
    [sym] : "sahil", 
    "sahil khan": "imran",
    age: 12,
    location: "mumbai",
    email: "sahilk.developer@gmail.com",
    isLoggedIn: false,
    array: ["sahil", "rahil"],

}
// console.log(newObj.email);
// console.log(newObj["sahil khan"]);
// console.log(newObj[sym]);

newObj.email= "sahilkhan.developer@gmail.com"
//Object.freeze(newObj)
//console.log(newObj);

newObj.greeting = function(){
    console.log("hellow world");
}

newObj.greetingTwo = function(){
    console.log(`hellow world, ${this.name}`);
}
console.log(newObj.greeting());
console.log(newObj.greetingTwo());