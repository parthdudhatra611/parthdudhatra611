var testArray=[2,4,6,8,3,1,9,5];

// console.log(testArray.fill("h"));

// console.log(testArray.fill("h",2));

console.log(testArray.fill("h",3,5));

const myNumber = [23,24,25,55,66,77,87,98];
const result = myNumber.filter((num)=> num !== myNumber);
console.log(result);

var user = ["Ted","Tim","Ton","Sam","Sor","Sod"];

// console.log(user.slice(1,4)); 
// console.log(user.slice(1));
user.splice(1,2,"HI"); 
console.log(user); 
