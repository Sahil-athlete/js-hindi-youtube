/* there is two types of datatype
1)primitive datatype 
2)regular or nonprimetive datatype

primitive datatype
string, number, bollean, null, undefined, bigint, symbol 

regular or nonprimitive 
array, object, function */

//premitive example

const string = "123"

const score = 100
const scoreValue= 100.2

const isLoggedIn = false

const outSideTemp = null

let userMail;

const Id = Symbol ('2321')
const uniqueId = Symbol ('2321')
console.log(Id === uniqueId);

const bigInt = 12333445321345522n

// //non premetive example

const jungju = ["khalidbinwalid, umarfarooque, aliabnabitalib"]

let obj= {

    name:"sahil",
    age: 21,
}

const myfunction =function(){
    console.log("hellow world");
}

 
console.log (typeof  jungju);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory (premitive) and heap memory(non-perimitive)

let myName = "sahilkhan"

let anotherName = myName

anotherName= "sahilathlete"

console.log(anotherName);

console.log(myName);

let userOne={
    email:"asdder@gmail.com",
    upi:"12331@ybl"
}
 
let userTwo = userOne

userTwo.email= "saddeqdf@gmail.com"

console.log(userTwo.email);

console.log(userTwo.email);

 





