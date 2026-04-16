
// singleton object
const tinderUser = new Object()  

console.log(tinderUser );

const UserWithoutSingleton ={}

UserWithoutSingleton.id = "123abc"
UserWithoutSingleton.name = "Sammy"
UserWithoutSingleton.isLoggedIn = false

console.log(UserWithoutSingleton);

const regularUser = {
    email : "some@gmail.com",
    fullnmae:{
        userfullname :{
            firstname : "mehran",
            lastname : "mir"
        }
    }
}

console.log(regularUser.fullnmae);
console.log(regularUser.fullnmae.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2}
console.log(obj3);

// const obj4 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2)  // another way
console.log(obj4);

// another way using ... operator
const obj5 = {...obj1, ...obj2}
console.log(obj5);

console.log(Object.keys(UserWithoutSingleton ));
console.log(Object.values(UserWithoutSingleton ));

console.log(UserWithoutSingleton.hasOwnProperty('id'));



