// let bolb = fetch('https://restcountries.com/v3.1/all')
// let actual = bolb.json()
// actual.then((a)=>{
//     console.log(a);
    
// })

let time = new XMLHttpRequest();

let prom = new Promise((resolve,reject)=>{
    
    let bolb = fetch('https://restcountries.com/v3.1/all')
    let actual = bolb.json()
    resolve(actual)
})

prom.then((a)=>{
    time.open('GET',a,true);
    
})