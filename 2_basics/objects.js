// create
Object.create
// objects literals
const mySym= Symbol('key1');

 const user={
    name:"shan",
    "full_name":"shan bhat",
     [mySym]:'mysymbol1',
    age:22,
    location:"himachal pradesh",
    email:"shan@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["monday", "friday","sunday"]
 }

//  console.log(user.email);
//  console.log(user['email']);
//  console.log(user[mySym]);

Object.freeze(user);
console.log(user);
user.name="shankey";
console.log(user);
