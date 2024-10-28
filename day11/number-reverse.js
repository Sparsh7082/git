/*
num = 5678

8
7
6
5
*/

let num = 5678;

while(num>0){
    let ld = num%10;
    console.log(ld);
    num = Math.floor(num/10);
}