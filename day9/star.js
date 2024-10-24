/*
      *
     ***
    *****
*************
  *********
   *** ***
  **     **
 *         *

*/

let nsp=6;
let nst=1;

for(let row=1;row<=8;row++){
    for(let space=1;space<=nsp;space++){
        process.stdout.write(" ")
    }
    for(let star=1;star<=nst;star++){
        process.stdout.write("*")
    }
    console.log();
    if (row<4) {
        nsp=nsp-1;
        nst=nst+2;        
    }
    
}