function armstrong(num){
    let nod=0;
    let temp=num;
    let temp2=num;
    let an=0;

    // finding number of digits
    while(temp>0){
        temp=Math.floor(temp/10);
        nod++;
    }

    while(temp2>0){
    let ld=temp2%10;    //finding last digit
    an=an+Math.pow(ld,nod);     //calculating armstrong number
    temp2=Math.floor(temp2/10);     // updating temp2
    }

    // checking whether armstrong number or not
    if(an==num){
    return true; 
    }
    else{
    return false;  
    }
}

let ans=armstrong(153);
console.log(ans);

