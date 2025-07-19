// const coding = ['js','ruby','python','cpp']

// const values = coding.forEach( (item)=>{
// console.log(item);
// return item;
// } )
// console.log(values);


const Mynums = [1,2,3,4,5]

// const newNums= Mynums.filter( (nums)=> {})


// const newNums= []
// Mynums.forEach( (num) => {
// if(num>3){
//     newNums.push(num)
// }

// })



// console.log(newNums); 


const books = [
  { name: "Thinking, Fast and Slow", genre: "Psychology", publishYear: 2011 },
  { name: "The Girl with the Dragon Tattoo", genre: "Thriller", publishYear: 2005 },
  { name: "To Kill a Mockingbird", genre: "Fiction", publishYear: 1960 },
  { name: "Sapiens: A Brief History of Humankind", genre: "Non-Fiction", publishYear: 2011 },
  { name: "Guns, Germs, and Steel", genre: "History", publishYear: 1997 },
  { name: "A Brief History of Time", genre: "Science", publishYear: 1988 },
  { name: "The Shining", genre: "Thriller", publishYear: 1977 },
  { name: "The Kite Runner", genre: "Fiction", publishYear: 2003 },
  { name: "Man's Search for Meaning", genre: "Psychology", publishYear: 1946 },
  { name: "Educated", genre: "Non-Fiction", publishYear: 2018 },
  { name: "The Nightingale", genre: "Historical Fiction", publishYear: 2015 },
  { name: "The Structure of Scientific Revolutions", genre: "Science", publishYear: 1962 },
  { name: "The Power of Habit", genre: "Psychology", publishYear: 2012 },
  { name: "The Da Vinci Code", genre: "Thriller", publishYear: 2003 },
  { name: "Pride and Prejudice", genre: "Fiction", publishYear: 1813 },
  { name: "Team of Rivals", genre: "History", publishYear: 2005 },
  { name: "Cosmos", genre: "Science", publishYear: 1980 },
  { name: "In Cold Blood", genre: "Thriller", publishYear: 1966 },
  { name: "The Immortal Life of Henrietta Lacks", genre: "Non-Fiction", publishYear: 2010 },
  { name: "The Road Less Traveled", genre: "Psychology", publishYear: 1978 }
];



let newBooks = books.filter(  (b)=>(
b.genre.toLowerCase =='history'
 ) )

console.log(newBooks);

