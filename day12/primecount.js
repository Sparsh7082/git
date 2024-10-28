let sn = 1;
let en = 10;
let prime = 0;
let notprime = 0;
for(let num=sn;num<=en;num++){
    if(num==1){
        continue;
    }
    let nof = 0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        notprime++;
    }
    else{
        prime++;
    }
}
console.log("not prime ",notprime);
console.log("prime ",prime);