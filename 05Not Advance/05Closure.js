// function init(){
//     var firstName = "parth";
//     console.log("I am the first")
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var num = init();

// num();

function doAddition(x){
    return function(y){
        return x + y;
    };
}

var add5 = doAddition(4);
console.log(add5(5));
