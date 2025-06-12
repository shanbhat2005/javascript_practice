const marvel=['ironman', 'thor','spider-man'];
const dc=['batman','superman','flash','green-lantern','green-arrow'];

marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// let allHeros= marvel.concat(dc);
// console.log(allHeros);

const all_new_heros=[...marvel,...dc];
console.log(all_new_heros);
 
