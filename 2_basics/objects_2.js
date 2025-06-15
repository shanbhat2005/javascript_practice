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
console.log(regularUser.fullName);