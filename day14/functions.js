function sayHello(){
    console.log("Hello");
    
}

sayHello();

for(let i=1;i<=10;i++){
    sayHello();
}

// first class member- store in any variable

let sparsh=function hello(){
    console.log("hello sparsh");
    
}

sparsh();