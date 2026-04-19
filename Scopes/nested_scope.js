function one(){

    const username = "mehran"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()

console.log(addone(5));



function addone(num){  // basic function
    return num + 1
}


//console.log(addtwo(5));   can't do this for this function because the function declartion for it is different  

const addtwo = function(num){ //expression kind of 
    return num + 2
}

addtwo(5)
