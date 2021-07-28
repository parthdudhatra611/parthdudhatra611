// for(let i = 0; i <= 10; i++) {
//    console.log(i); 
// }

const mystates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Munbai"
];

// for(let i = 0; i < mystates.length; i++) {
//     console.log(mystates[i]);
// }
// for(let i = 0; i < mystates.length; i++) {
//     if(typeof mystates[i] !== "string") continue; //break;
//     console.log(mystates[i]);
// }

let i = 0;
while(i < mystates.length){
    console.log(mystates[i]);
    i++;
}

let a = 20;

do{
    console.log(a);
    a++;
}while(a < 10);

