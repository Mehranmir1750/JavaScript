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



const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password : "123"})
        } else{
            reject('ERROR: Js went wrong')
        }
    },5000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive()



async function getAllUsers(){
    
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {

        console.log("E:", error);
        
        
    }
    
}

getAllUsers()


/* 


🎯 Main Purpose of Promises

👉 To handle asynchronous operations (tasks that don’t finish immediately) in a clean and controlled way.

🧠 Why we even need Promises?

JavaScript is single-threaded → it does one thing at a time.

But some tasks take time:

🌐 API requests
📂 File reading
🗄️ Database queries
⏳ Timers

👉 Without Promises, JS would get stuck waiting ❌

⚡ What Promise does

👉 It lets JavaScript say:

“Start this task… I’ll continue other work… and when it finishes, I’ll handle the result.”




fetch() is used to send and receive data from a server (API) asynchronously.

Promise is used to handle async (time-taking) operations without blocking the program








🧠 Perfect Explanation (remember this)

👉 When you use fetch():

It starts getting data from server
It immediately returns a Promise
JavaScript continues running other code
When data arrives → Promise is resolved
Then you handle it using .then() or await

*/