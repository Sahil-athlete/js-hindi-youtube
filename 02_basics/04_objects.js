// const tinder = new Object()

const tinder = {}

 tinder.name =  "sahil"
 tinder.details = "d sector"
 tinder.email = "sahilk.developer@gmail.com"

console.log(tinder);

const values = {
    finction : {
        parameter : {
            anotherValues : {
                name : "sahil",
                addreaaa : "dataTypes"                  
            }
        }
    }
}
console.log(values.finction.parameter);

const obj1  = {1: "a" , 2: "b"}
const obj2  = {3: "c" , 4: "d"}

const obj3 = Object.assign( {} , obj1 , obj2) 
console.log(obj3);

const obj4 = {...obj1 , ...obj2}
console.log(obj4);

const users = [
    {
        id : 1,
        email: "sahilk.developer@gmail.com",
        name: "sahil" , 
        mobileNo: 7304049845,
    },
    {
        email: "sahilk.developer@gmail.com",
        name: "sahil" , 
        mobileNo: 7304049845,
    },
    {
        email: "sahilk.developer@gmail.com",
        name: "sahil" , 
        mobileNo: 7304049845,
    },
]

users[1].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('address'));

const course = {
    courseName: "javascript",
    price : 999,
    teacher : "hitesh sir"
}

console.log(course.courseName);

const {courseName : a} = course

// console.log(courseName);
console.log(a);

// {
//     "name" : "sahil" ,
//     "corseName" : "javascript in ",
//     "address" : "d sector " , 
//     "area" : "cheeta camp"    

// }
//  this is the formt of json when api call 

[
    {},
    {},
    {},
    {}
]
// another way of format for json 