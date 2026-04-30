/* 

    Three stages of promises
        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed.
    
    */


const promiseOne = new Promise(function(resolve,reject){
    // do an async task 
    // DB calls , cryptography , network call

    setTimeout(function(){
        console.log( 'Async task is completed');
        resolve()
        
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Mehran", email : "mehranmir@gmail.com"})
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
    

})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "mehran", password : "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },4000)
})

promiseFour
.then((user) => {
    console.log(user);    
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);    
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})