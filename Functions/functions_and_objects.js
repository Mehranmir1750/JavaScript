function CalculateCartPrice(...num1){ // rest operator 
    return num1    
}

console.log(CalculateCartPrice(5, 7 , 9));

const user = {

    username : "mehran",
    price : 677 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

// another way 

handleObject({
    username:"zargar",
    price: 980
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));

// another way 
console.log(returnSecondValue([400,200,100,700]));


