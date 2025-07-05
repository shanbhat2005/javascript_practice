const user = {
    username:"shan",
    price:89,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
user.username="sam"
// user.welcomeMessage()

// function chai(){
//     let username="shan"
//     console.log(this);
// }

// chai()

const chai = ()=>{
    let username="shan"
    console.log(this);
}
// chai();


const addTwo= (num1,num2) =>  num1+num2

console.log(addTwo(1,2))

