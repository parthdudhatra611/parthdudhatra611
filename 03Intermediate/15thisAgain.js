console.log(this);
var user = {
    firstName: "parth",
    coursesCount:4,
    getCourseCount : function (){
        console.log("LINE 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 9" , this)
        }
        sayHello();
    },
};

user.getCourseCount();