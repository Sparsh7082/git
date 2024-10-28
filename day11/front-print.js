/*
num=45678

4
5
6
7
8

*/
/*
let num=45678;
let nod=0;
while(num>0){
    while(num>0){
        let ld=num%10;
        nod++;
        num=Math.floor(num/10);
    }
    let dig=Math.floor(num/Math.pow(10,nod-1))
    console.log(dig);
    
}
*/

let num=45678;
let temp=num;
let nod=0;

while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}

let div=Math.pow(10,nod-1);

while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=Math.floor(div/10);
    
}
