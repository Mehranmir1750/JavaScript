const userEmail = "m@gmail.com"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
    
}

// false values
// false, 0 , -0 , BigInt -> 0n , "", null , undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}


// Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5?? 10

console.log(val1);

val2 = null ?? 10

console.log(val2);

val3 = undefined ?? 15

console.log(val3);


