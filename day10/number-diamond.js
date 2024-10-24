//   1
//  234
// 56789
// 101112
//  13

let nsp=2;
let nst=1;
let val=1;
for(let row=1;row<=5;row++){
    let ans="";
    for(let space=1;space<=nsp;space++){
        ans=ans+" "
    }
    for(let star=1;star<=nst;star++){
        ans=ans+val
        val=val+1
    }
    console.log(ans);
    if(row<3){
    nsp=nsp-1;
    nst=nst+2;
    }
    else{
    nsp=nsp+1;
    nst=nst-2;
    }
}