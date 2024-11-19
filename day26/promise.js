// resolve is for promise is fulfilled and then shows the result
// reject is for promise is rejected and catch shows the result

let prom1 = new Promise((resolve,reject)=>{
    resolve("yes");
    reject("no");
})

// console.log(prom1);

prom1.then((haan)=>{
    console.log(haan);
    
}).catch((naa)=>{
    console.log(naa);
    
})