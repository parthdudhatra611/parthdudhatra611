var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is: ${this.name}`);
    },
};

var hitesh = Object.create(User);
console.log(hitesh);
hitesh.name = "hitesh Chodhary";
hitesh.getUserName();

var sam = Object.create(User, {
    name : { value :"Sammy"},
    courseCount : { value : 3},
});

sam.getUserName();