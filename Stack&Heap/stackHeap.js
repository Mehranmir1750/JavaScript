
// stack => Primitive
// jo variable declarce hota hai usski copy banti hai 


// Heap => Non-Primitive 
// jo bhi varaible declare hota hai uskki refrence milti hai
// jo bhi change hoga refrence mai woh orginal mai bhi

let myName = "mehran"

let anotherName = myName
anotherName = "mehran mir"

// myNAme ki copy di gayi thi , not myNAme direvtly , so change in copy does not change orginal data 
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "mehran789@gmail.com",
    upi: "mehran@upi.com"
}

let userTwo = userOne

userTwo.email = "mehran456@gmail.com"

// value changed because of refrence , ismai copy nai di gayi thi
console.log(userOne.email);
console.log(userTwo.email);


