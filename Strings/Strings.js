console.log("hello"+" world");


const name = "mehran"
const repoCount = 35

// console.log(name +" "+ repoCount + " value");

console.log(`Hello my name is ${name} and my repo count are ${repoCount}`);

// another way to declare string
const gameName = new String('mehran-mir')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 8)
console.log(anotherString);

const newStringOne = "   mehran   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove extra useless space  , acually called whitespaces

const url = "www.mehranmir%20.com"

console.log(url.replace('%20','-' ));

console.log(url.includes('mehran'));  // pata karo mehran ismai hai ya na 

//string to array convert based on - or " "

console.log(gameName.split('-'));

console.log(gameName.fontcolor('red'));











