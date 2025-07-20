// reduce 

const myNums = [1,2,3]

const myTotal= myNums.reduce( (acc,curval) =>{
    // console.log(`acc: ${acc} and curval: ${curval}`);
    
    return acc+curval
},3  )

// console.log(myTotal);



const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 2999
    },
    {
        itemName:"data-science course",
        price: 2999
    },
    {
        itemName:"android development course",
        price: 2999
    },

]

const totalPrice = shoppingCart.reduce( (acc,item)=> acc + item.price
,0 )
console.log(totalPrice);
 