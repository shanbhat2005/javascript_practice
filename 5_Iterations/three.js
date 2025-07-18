//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const str="shashank bhat";

for (const i of str) {
    if(i=='') {
        continue
    }
        
    // console.log(i);
    
}

// maps

const map=new Map()
map.set("IN","India")
map.set("BZ","Brazil")
map.set("CND","Canada")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,'->',value)
}

const objects={
    'game1':'gow',
    'game2':'spider-man'
}

for (const  [key,value] of object) {
    log
}