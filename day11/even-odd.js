let num=56478;
let odd=0;
let even=0;

while(num>0){
    let ld=num%10;
    if(ld%2==0){
        even=even+1;
        
    }else{
        odd=odd+1;
        
    }

    num=Math.floor(num/10);
}
console.log("even:"+even);
console.log("odd:"+odd);