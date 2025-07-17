// for

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    
   for (let j = 0; j <= 10; j++) {
    // const element = array[j];
    // console.log(`inner value ${j} and inner loop ${i}`);
    
    
   }
    
}

// break and continue

for (let index = 1; index <= 10; index++) {
    if(index==5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
    
    
}