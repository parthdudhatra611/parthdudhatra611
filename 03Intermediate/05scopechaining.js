var name1 = "parth";

console.log("Line number 3", name1);

function sayName(){
    var name1 = "hiteh"
    console.log("Line number 6" , name1);

    sayNameTwo();

    function sayNameTwo(){
        var name1 = "Ashish"
        console.log("Line number 10", name1);
    }
}

sayName();