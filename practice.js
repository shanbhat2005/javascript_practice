async function getData(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()

        console.log("---Names of Users are---")
        users.forEach(element => {
            console.log(element.name)
        });
    }catch(error){
console.log(error)
    }
}
getData()