const userEmail=[]

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have email");
    
}

// if(userEmail.length===0){
//     console.log("array is empty");
// }

const obj={
    name:"shan",
    age:20,
}

if(Object.keys(obj).length===0){
// console.log("object is empty");
}


// nullish coalescing operator
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// terniary operator

// (condition) ? true : false 
const age = 20;

age<=19 ? console.log("teenager") : console.log("adult");
