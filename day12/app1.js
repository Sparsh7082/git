// let num=49;
// nof=0;

// for(let div=1;div<=num;div++){
//     if(num%div==0){
//         nof++;
//     }
// }
// if(nof>2){
//     console.log("not prime");
    
// } else{
//     console.log("prime");
    
// }

let num = 7;
let nof = 0;
for(let div=1;div<=num;div++){
    if(num%div==0){
        nof++;
    }
}
if(nof>2){
    console.log("not prime");
}
else{
    console.log("prime");
}