function primecount(start,end){
    let count=0;
    for(let num=start;num<=end;num++){
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
        if(nof==0){
            count++;
        }
        
    }
    return count;
}
let ans=primecount(90,100);
console.log(ans)