const user = ["parth", 3, "admin"];

var roles = user[2];
var name = user[0];

var [name, roles , course] = user;
console.log(roles);



const MyUser = {
    name1 : "parth", 
    courseCount: 5,
    roles : "admin",
}
const {name, courseCount, roles} = MyUser;
console.log(roles);