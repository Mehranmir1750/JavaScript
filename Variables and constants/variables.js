// const cannot be changed , value is locked
const accountId = 14435

// can be changed
let accountEmail = "mehran@google.com"

//can be changed
/*
don't use var 
let and var are same but scope problem in var
Use let because it keeps variables inside the block where they belong

👉 var leaks variables everywhere in the function
*/


var accountPassword = "123456"

accountCity = "Kashmir"

console.table([accountId,accountEmail,accountPassword])