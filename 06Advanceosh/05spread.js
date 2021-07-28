// var returnedValue = Math.max(2,5,7,4,2,8);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, { a : 1, b : 2, c : 3, d : 4},{ z : 9, y : 8});
// console.log(myObj);

function sumOne(a,b){
    return a + b;
}

var myA = [5,4];
console.log(sumOne(...myA)); // spread OP

function sumTwo(...args){
    let sum =0;
    for (const a in args){
        sum += a;
    }
    return sum;
}

console.log(sumTwo(2,3,4,5,6));