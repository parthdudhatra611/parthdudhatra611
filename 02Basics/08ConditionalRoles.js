// create an application with following roles
// admin You get full access
// subadmin-Gets access to create/delete courses
// testprep-Gets access to create/delete tests
// user-get access to consume content


var user = "admin";

switch(user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("Gets access to create/delete courses");
        break;
    case "testprep":
        console.log("Gets access to create/delete tests");
        break;
    case "user":
        console.log("get access to consume content");
        break;
    
    default:
        console.log("Tiral User");
        break;
    
}