function myName(){
    console.log("s");
    console.log("a"); 
    console.log("h");     
    console.log("i");
    console.log("l");

}

myName()

// function addTwoNumber (number1 , number2){
//      console.log(number1 + number2)
// }

function addTwoNumber (number1 , number2){
  
    // let result = number1+number2
    //console.log("sahil");         before result you can print. 
    // return result 
    // console.log("sahil");        after result you can't print anything. 
    return number1+number2
}
const result = addTwoNumber(3, 2)
 console.log( "result", result);


function userLogedIn(message="sam"){
    if(!message){
         console.log("pleaswe enter the detials")
         return
    }
    return ` ${message} just loged in`   //after return you can't print anything.  
             
}
// console.log(userLogedIn("sahil"));

function calculateShpingCart(val1, val2, ...num1){
    return   num1 
}
console.log(calculateShpingCart(1, 12, 122, 3344, 433311));


const  user = {
    username : "sahil",
    prices : 999
 }

function addObject(anyuser){
    console.log(`the name is ${anyuser.username} and price of course is ${anyuser.price}`)


}
//addObject(user)
addObject({
    username : "small",
    price : 12
})

myNewArray =[ 100,200,3000]


function addArray (getArray){
    return getArray[0]
         
}

// console.log(addArray(myNewArray));
console.log(addArray([100, 200, 300]))