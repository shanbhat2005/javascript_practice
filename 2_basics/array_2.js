const marvel=['ironman', 'thor','spider-man'];
const dc=['batman','superman','flash','green-lantern','green-arrow'];

// console.log(marvel);
// console.log(marvel[3][1]);

// let allHeros= marvel.concat(dc);
// console.log(allHeros);

let all_heros= [...marvel,...dc];
// console.log(all_heros);

const another_array=[1,2,3,[4,5],6,[8,7],[7,8,[9,10]]];
const real_another= another_array.flat(Infinity);
// console.log(real_another);

// array from method
console.log(Array.from("shan")); // 
console.log(Array.from({name:"shan"})); // 

// console.log(Array.from([1, 2, 3], (x) => x + x));

// array of method
// let score1=100;
// let score2=200;
// let score3=300;

// console.log(Array.of(100,"shan","shankey",true));
console.log(Array(3).push(12,24));;

// console.log(Array.of(score1,score2,score3)); // [100, 200, 300]


