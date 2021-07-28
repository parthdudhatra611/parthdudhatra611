const User = require('./06classjs')
const parth = new User("parth" , "parth@gmail.com");

console.log(parth.getInfo());
parth.enrollCourse("React Bootcamp");
parth.enrollCourse("Anguler Bootcamp");

console.log(parth.getCourseList());

let course = parth.getCourseList();

course.forEach((c)=> console.log(c));
