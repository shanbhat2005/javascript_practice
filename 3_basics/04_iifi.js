// iife

(function chai(){
    // this is an named iife
    console.log("db connected ");
}

)();

( (name)=>{
    // this is an normal  iife
console.log(`db connected to server ${name} `);
} )("america");


