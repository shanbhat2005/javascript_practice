// function sayHello(){
//     console.log("hello");
//     console.log("this is shan");
// }

// sayHello();

// function add(a,b){
// console.log(a+b);
// }

// add(5,'a');
function calculateCartPrice(...num1){
    return num1;
}


// console.log(calculateCartPrice(200,300))

const user ={
    username:"shan",
    price:200,

}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
    
}
// handleObject(user);

// handleObject({username:"shanky",price:2000})

const newArray=[200,300,400];

function takeArray(array){
    return array[1];


}
console.log(takeArray(newArray))