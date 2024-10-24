/*
*****
 ***
  *
 ***
*****
*/

let nsp=0;
let nst=5;

for(let row=1;row<=5;row++){
    for(let space=1;space<=nsp;space++){
        process.stdout.write(" ")
    }
    for(let star=1;star<=nst;star++){
        process.stdout.write("*")
    }
    console.log();
    if (row<3) {
        nsp=nsp+1;
        nst=nst-2;    
    } else{
        nsp=nsp-1;
        nst=nst+2;
    }
    
}