const coding = ['js', 'python', 'java', 'cpp']

// for each is higher order function 

console.log();

coding.forEach( function (item){  // callback function does not have name
    console.log(item);
    
})

// second way 

coding.forEach(  item =>{  // callback function does not have name
    console.log(item);
    
})


function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

// does have more parameters 
coding.forEach( (item, index , arr) => {
    console.log(item,index,arr);
    

})


const myCoding =[
    {
        languageName : 'javascript',
        languageFileName : "js"
    }, {
        languageName : 'java',
        languageFileName : "java"
    }, {
        languageName : 'python',
        languageFileName : "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
}

)
