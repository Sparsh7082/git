let obj1 = {
    x:100,
    y:200
}

let obj2 = obj1;

console.log("before -",obj1);
console.log("before -",obj2);

obj1.z = 300;

console.log("after -",obj1);
console.log("after -",obj2);