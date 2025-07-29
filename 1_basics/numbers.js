const score = 190.846;

const balance = new Number(33);
// console.log(balance);

// console.log(score.toFixed(4));
console.log(score.toPrecision(2));

const hunderds= 10000000;
// console.log(hunderds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
// converts negative into positive
console.log(Math.abs(-4));
// rounds the number 
console.log(Math.round(44.7));

// to get a number greater than 0

console.log(Math.floor(Math.random()*10)+1);

// to get a number within a range of minimum and maximum number
let min=10;
let max= 30;

console.log(Math.floor(Math.random()*(max-min+1)+min));
