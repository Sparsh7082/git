let sn=1;
let en=10;
let notprime=0;
let prime=0;

for(let num=sn;num<=en;num++){
    if(num==1){
        continue;
    }
    let nof=0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        notprime++;
        // console.log("not prime",num);
        
    }
    else{
        prime++;
        // console.log("prime",num);
        
    }
}
console.log("not prime",notprime);
console.log("prime",prime);
