let a = 10
const b = 20 
var c = 30 

console.log(a);
console.log(b);
console.log(c);

if(true){
    let d = 10
    const e = 20 
    var f = 30 
}

// console.log(d);  // out of scope
// console.log(e);  // out of scope
console.log(f);    // value printed outside scope
