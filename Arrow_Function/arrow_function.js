const user = {

    username: "mehran",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);  // this used for current context
        console.log(this);
        
    }
}

user.welcomeMessage()

user.username = "sam"

user.welcomeMessage()
console.log(this);

function chai(){
    console.log(this);
    
}

chai() 

function chaiTwo(){
    let username = "mehran"
    console.log(this.username);   // can't use this inside function
    // it gives undefined value
    
}

chaiTwo() 

//arrow function

const chaiThree = () => {
    let username = "mehran"
    console.log(this.username);  //this cannot be used 
}

chaiThree()

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(7,8));

//implicit return 

const addThree = (num1,num2, num3) =>  num1+num2+num3

// if {} used then use return statement

console.log(addThree(7,8, 5));

const objectReturn = (num1,num2, num3) =>  ({username:"mehran"})

console.log(objectReturn());


