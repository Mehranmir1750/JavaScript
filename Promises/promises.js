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