const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num)=> num>4)
console.log(newNums);

const newNums2 = []

myNums.forEach( (num) => {
    if(num>4){
        newNums2.push(num)
    }
})

console.log(newNums2);


const books = [
    {tile: 'book one', genre: 'Fiction', publish: 1981},
    {tile: 'book two', genre: 'History', publish: 1986},
    {tile: 'book three', genre: 'Non-Fiction', publish: 2003},
    {tile: 'book four', genre: 'Science', publish: 1904},
    {tile: 'book five', genre: 'Fiction', publish: 1999},
];


const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks); 
