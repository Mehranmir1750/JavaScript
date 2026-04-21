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


let myArray = ['ertugrul', 'osman', 'orhan']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

//  break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5 ');
        break;
    }
    console.log(`Value of i is ${index}`);

    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('Detected 5 ');
        continue;   // galti hogayi ek baari maaf kar dou
        // condition skipped once but will not come out of loop
    }
    console.log(`Value of i is ${index}`);

    
    
}