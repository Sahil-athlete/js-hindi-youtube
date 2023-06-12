let a = 230
if(true){
    let a = 30
    const b = 20
   
//    console.log("INNER" , a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sahil"

    function two(){
        const website = "youtube"

        // console.log(username);
        
    }
    // console.log(website);

    two()
}
 
one()

if(true){
    const name = "sahil"

    if (name === "sahil"){

        const website = " youtube"
        // console.log( name + website);
    }
   // console.log(website);
     
}
//console.log(name);

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
   return num +1
 
}
 

console.log(addtwo(3))
const addtwo = function(num){
    return num + 2 
}
 