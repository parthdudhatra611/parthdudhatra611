var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function (){
    console.log(`First name is ${this.firstName}`);
};


var parth = new User("parth",2);
parth.getFirstName();

// console.log(parth);

// var ashish = new User("ashish",3);
// console.log(ashish);