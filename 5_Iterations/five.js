const coding = ['js','java','python','cpp']

// coding.forEach(function (val){
// console.log(val);

// } )

// coding.forEach( (val,index,arr)=>{
// console.log(`value is ${val} and it is at index: ${index+1}`);

// } )

const myCoding=[
    {
        languageName:"javascript",
        languageFile:"js",
    },
    {
        languageName:"java",
        languageFile:"java",
    },
    {
 languageName:"python",
        languageFile:"py",
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageFile);
    
} )