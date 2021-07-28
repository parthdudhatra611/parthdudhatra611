// define a function that can answer the role of a user.
// A user can be on following roles;
// admin - with all access
// subadmin - with access to create/delete courses
// user - consume all content
// other - trial user.

// Input : getUserRole(name, role)

var getUserRole = function(name, role){

    switch(role){
        case 'admin':
        return `${name} is admin with all access`;
         break; //  this is not necessarily
        case 'subadmin':
        return `${name} is subadmin with access to create/delete courses`;
        break;
        case 'testprep':
        return `${name} is test prep with access to create/delete tests`;
        break;
        case 'user':
        return `${name} is user consume all content`;
        break;

        default:`${name} is a trial user`
        break;
    }
}

console.log(getUserRole("parth","testprep"));

var getrole = getUserRole("parth", "user");
console.log(getrole);