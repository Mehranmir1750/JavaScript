const myNums =[1,2,3]

const myTotal= myNums.reduce(function (accumulator, currentValue){
    console.log(`accumlator: ${accumulator} and current value: ${currentValue}`);
    
    return accumulator + currentValue
}, 0)

console.log(myTotal);
