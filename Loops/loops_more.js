const myObject = {
    js: 'javascript',
    cpp: ' C++',
    rb: 'ruby',
    swift : 'swift by apple'
}


// for in loop can be used to display objects

for (const key in myObject) { 

    console.log(`${key} => ${myObject[key]}`);
    
   

} 

const programming = ["js", "rb", "py", "cpp"]

for(const key in programming){
    console.log(programming[key]);
    
}