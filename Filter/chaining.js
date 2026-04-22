const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers.map( (num) => num+10 )
console.log(newNums);


//channing method => Method chaining means using more than one map() or filter() in sequence.
const newNums1 = myNumers
                 .map( (num) => num* 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)
console.log(newNums1);

