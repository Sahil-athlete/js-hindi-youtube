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
console.log(userLogedIn("sahil"));





