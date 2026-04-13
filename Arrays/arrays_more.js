const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]

numbers2.push(numbers1)

console.log(`Used push ${numbers2}`);

numbers2.concat(numbers1)

console.log(`Used conCat ${numbers2}`);

//spread operator 

const all_numbers = [...numbers1, ...numbers2]
console.log("spread operator");

console.log(all_numbers);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(`real another array ${real_another_array}`);

