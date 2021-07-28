// User is only allowed to make a purchase when he is:
// Logged in as
// email varified
// cardInfo-valid
// If any one is missing , stop purchase


var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("success");
}
else{
    console.log("Unsuccess");
}