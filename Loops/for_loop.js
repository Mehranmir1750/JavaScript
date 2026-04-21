// for 

for (let index = 0; index < 10; index++) {
    const element = index;
    
    if (element == 5) {
        console.log("5 is best number ");
        
        
    }

    console.log(element);
    
    
}


for (let j = 0; j < 10; j++) {
    console.log(`Outer loop value: ${j}`);

    for (let k = 0; k < 10; k++) {
        console.log(`Inner loop value: ${k}`);
        
    }
    
    
}