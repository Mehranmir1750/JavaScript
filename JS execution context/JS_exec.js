
// JAVASCRIPT EXECUTION CONTEXT 

// how will javascipt execute file 

//javascript is single threaded language

// global execution context
//function exec con
// eval exec con

// two phases for execution 

/* 

phase 1 : memory creation phase

    variables and declared things are allocated with memory  => are allocated inside this
// first cycle
    val1 -> undefined  -> line 1
    val2 -> undefined  -> line 2 
    addnum -> defination -> line 3 to line 6
    result1 -> undefined
    result2 -> undefined

phase 2: execution phase

    val1 <- 10
    val <- 5
    addNum -> new environment + execution thread -> for each run 
            
            // memory phase and execution phase for now this 
    val1 -> undefined
    val2 -> undefined
    total-> undefined

        // now execution 

            num1 <- 10
            num2 <- 15
            total <- 15  return to global execution context

            global execution context delets after execution



*/

let val1 = 10
let val2 = 5

function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
