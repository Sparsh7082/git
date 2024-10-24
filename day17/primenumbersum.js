function primeinrangeandtheirsum(start,end){
    
    let sum=0;
    
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
            sum=sum+num;
        }
    }
    return sum;
}

let ans= primeinrangeandtheirsum(1,10);
console.log(ans)