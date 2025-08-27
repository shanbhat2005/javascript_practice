const promiseOne  = new Promise(function(resolve,reject){

    setTimeout(function(){
console.log("task is complete")
resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
resolve({username:'chai',email:"chai@code.com"})
    },1000)
})

promiseThree.then((user)=>{
console.log(user)
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
let error = false;
if(!error){
    resolve({username:"shan",password:12345})
}
else{
    reject('ERROR!!!')
}
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username)
}).catch((error)=>{
    console.log(error)

}).finally(()=>{
    console.log("promise is resolved or rejected")
})



const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
let error = true;
if(!error){
    resolve({username:"javascript",password:'12'})
}
else{
    reject('ERROR ; js went wrong ')
}
    },1000)
})


async function consumePromiseFive(){
try{
    const request = await promiseFive
console.log(request)
}
catch(error){
    console.log(error)
}

}
consumePromiseFive()

async function getAllUsers(){
    await fetch('https://jsonplaceholder.typicode.com/users')
}