// if
// const isUserLoggedIn= true
// const temperature =41
// if( temperature === 41){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50 ");

// }
// console.log("executed");


// const score= 200


// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power }`);
    
// }
//  console.log(`user power: ${power }`);
    

// const balance= 1000

// if (balance < 500) {
// console.log("less than 500");

// } else if(balance < 750){
// console.log("less than 750 ");

// } else if(balance <900){
//     console.log("less than 900");
    
// } else{
//     console.log("less than 1200");
    
// }


const userLoggedIn= true
const debitCard= true
const googleLogin= true
const emailLogin= false

if (userLoggedIn && debitCard) {
    console.log("allowed to buy courses");
    
} else if ( userLoggedIn!=true) {
    console.log("you need to login ");
    
    
}else if(debitCard!=true){
    console.log("you need to have debit card");
    
}
if(googleLogin || emailLogin){
    console.log("user logged in...");
    
}