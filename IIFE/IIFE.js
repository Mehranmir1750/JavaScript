
// immediately invoked function expression

(function chai(){

    //named     IIFE

    console.log(`DB CONNECTED`);
    
})();

//global scope pollution removed by iife

// purpose of iife => To hide variables from global scope
// ; important for iife => it stops otherwise it does not 


((name) => {

    // UNNAMED IIFE 
    
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) (`mehran`)
