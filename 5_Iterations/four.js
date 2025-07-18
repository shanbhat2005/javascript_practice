const myObj={
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"ruby" 
};

for (const lang in myObj) {
    console.log(`${lang} is shortform of ${myObj[lang]}`);
    
    
}