 // array 

 const myArr = [0,1,2,3,5]

 console.log(myArr[2]);

 const myHeros = ["ertugrul", "uthman"]

 const myArr2 = new Array(8,8,5,3)
 console.log(myArr2[3]);


 // array methods 
 myArr.push(6,7,8)
 console.log(myArr);
 myArr.push(9)
  console.log(myArr);

  myArr.pop()
   console.log(myArr);

myArr.unshift(9)
 console.log(myArr);

 myArr.shift()
 console.log(myArr);

 console.log(myArr.includes(9));

 const newArr = myArr.join()   // converts to string 

  console.log(myArr);
  console.log(newArr);


  //slice , splice

  console.log("A", myArr);

  const myn1 = myArr.slice(1,3)
  console.log(myn1);
  
  console.log("B",myArr );

   const myn2 = myArr.splice(1,3)
  console.log(myn2);

    console.log("Orginal Array after splice",myArr );
  
  // difference between splice and slice
// in splice orginal array is manipulated
  
 
 
 
 