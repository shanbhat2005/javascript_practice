// const user = {
//     username:"shan",
//     loginCount:0,

//     getUserInfo:function(){
//         console.log("got user details from db")
//         console.log(`Username: ${this.username}`);
//     }
// }

// console.log(user.username)
// console.log(user.getUserInfo());

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount= loginCount
    this.isLoggedIn= isLoggedIn;

    return this
}
const userOne = new user("shashank",4,true)
const userTwo = new user("shs",9,false)
console.log(userOne)
console.log(userTwo)