// 5 ways to do deep copy in object

// spread

// let obj1 = {
//     x:100,
//     y:200
// }

// let obj2 = {...obj1}

// console.log("before -",obj1);
// console.log("before -",obj2);

// obj1.z = 300;

// console.log("after -",obj1);
// console.log("after -",obj2);

// loop- for in

let obj1 = {
    x:100,
    y:200
}

let obj2 = {};

console.log("before -",obj1);
console.log("before -",obj2);

for(let key in obj1){
    obj2[key] = obj1[key];
}


console.log("before -",obj1);
console.log("before -",obj2);

obj1.z = 300;

console.log("after -",obj1);
console.log("after -",obj2);

