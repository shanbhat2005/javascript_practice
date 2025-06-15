// const tinder= new Object() this is a singleton object
// const tinder = {} this is a non singleton object

 const tinderUser = {}

tinderUser.name="klaus",
tinderUser.id=2,
tinderUser.isLoggedIn= true;

const regularUser={
    email:"regular@gmail.com",
    fullName:{
        userfullname:{
            firstname:"shan",
            lastname:"bhat"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1={
    1:"a",
    2:"b",
    
}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}

const obj3=Object.assign(obj1,obj2);
// console.log(obj1===obj3);

// obj3={...obj1,...obj2};

const users=[
    {
        id:1,
        email:"shan@gmail.com"
    },
    {
        id:2,
        email:"shanky@gmail.com"
    },

]

console.log(tinderUser);

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("name"));

