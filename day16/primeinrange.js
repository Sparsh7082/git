function primeinrange(start,end){
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
        if(nof>0){
            console.log("not prime ",num);
            
        }
        else{
            console.log("prime ",num);
            
        }
    }
}

primeinrange(1,10);