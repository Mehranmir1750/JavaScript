// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    "full name": "Mehran mir",
    [mySym]: "mykey1",
    name: "Kashmir",
    age: 18,
    location: "Kashmir",
    email: "kashmir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser["age"]);

console.log(JsUser["full name"]); //can access full name only by this [] method not by '.' method

console.log(JsUser[mySym]);

JsUser.email = "mehranmir@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "mehranmir@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting( ));
console.log(JsUser.greetingTwo( ));



