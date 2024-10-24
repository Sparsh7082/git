let num=1530;
let temp=num;
let temp2=num;
let nod=0;
let an=0;

while(temp>0){
    temp=Math.floor(temp/10)
    nod++;
}
let div=Math.pow(10,nod-1);
while(temp2>0){
    let fd=Math.floor(temp2/div);
    an=an+Math.pow(fd,nod);
    temp2=temp2%div;
    div=Math.floor(div/10);
}

if(an==num){
    console.log("armstrong number");
    
}
else{
    console.log("not armstrong number");
    
}