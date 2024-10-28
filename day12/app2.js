num=7;
nof=0;
for(let div=2;div<=num-1;div++){
    if(num%div==0){
        nof++;
        break;
    }
}
if(nof>0){
    console.log("not prime");
    
} else{
    console.log("prime");
    
}
