/*
5786

number of digits or nod?
*/

let num = 5678;
let nod = 0;
while(num>0){
    num=Math.floor(num/10);
    nod++;
}
console.log(nod);
