var myMap = new Map();
myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// for( let key of myMap.keys() ) {
//     console.log(`key is ${key}`);
// }

// for(let valve of myMap.values()){
//     console.log(`valve is ${valve}`);
// }

for (let [key, val] of myMap){
    console.log(`key is ${key} and val is ${val}`);
}

myMap.forEach((key)=> console.log(`${key}`));