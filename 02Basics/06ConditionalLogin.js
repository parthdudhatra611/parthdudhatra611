// Allow User to access course if he is:
// Logged in emial
// Logged in Google
// Logged in facebook

var email = true;
var facebook = false;
var google = false;

if(email || facebook || google) {
    console.log("Logged in success");
}
else {
    console.log("Goodbye");
}

var google = true;
var facebook = false;
var email = false;

if(email && facebook && google){
    console.log("Logging is success");
}
else{
    console.log("Goodbye");
}

