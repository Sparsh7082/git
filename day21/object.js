let obj = {
    name:["sparsh","gupta"],
    age:24,
    education:"MBA",
    city:function(){
        console.log("Delhi");
    },
    indian: true,
}
console.log(obj.name);

for(let key in obj){
    console.log(key);
    
}

let details = new Object();
details.name = ["sparsh","gupta"]

console.log("------------------------------");
