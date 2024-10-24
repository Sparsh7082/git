/*
*****
 ****
  ***
   **
    *
55555
 4444
  333
   22
    1
*/

let nsp=0;
let nst=5;
let val=5;
for(let row=1;row<=5;row++){
    ans="";
    for(let space=1;space<=nsp;space++){
        ans=ans+" ";
    }
    for(let star=1;star<=nst;star++){
        ans=ans+val;
    }
    val=val-1;
    nsp=nsp+1;
    nst=nst-1;
    console.log(ans);
}

/*
l14 nsp=ram=0
l15 nst=ram=5
l16 val=ram=5
l17 row=ram=1
    row<=5 1<=5 true
l18 ans=ram=""
l19 space=ram=1
    space<=nsp 1<=0 false
l22 star=ram=1
    star<=nst 1<=5 true
    
*/