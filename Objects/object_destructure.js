
const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courceInstructor

const {courseInstructor} = course

console.log(courseInstructor);

// or 

const {courseInstructor: instructor} = course

console.log(instructor);


// APIs-> getting data from them in json format

// {   // json format
//     name:"mehran",
//     coursename: "js in hindi",
//     price:"free"
// }
