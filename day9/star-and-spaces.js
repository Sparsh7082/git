/*
    *
   **
  ***
 ****
*****
*/
// let nsp=4;
// let nst=1;
// for(let row=1;row<=5;row++){
//     //kuch space chapne h
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }
//     //kuch star chapne h
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }
//     //new line me aana h
//     console.log();
//     //update space and star
//     nsp=nsp-1;
//     nst=nst+1;
// }
// console.log("------------------------------");

/*
*****
 ****
  ***
   **
    *
*/
// let nsp = 0;
// let nst = 5;
// for(let row=1;row<=5;row++){
//     //kuch space chapne h
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }
//     //kuch star chapne h
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }
//     //new line me aana h
//     console.log();
//     //update
//     nsp=nsp+1;
//     nst=nst-1;
// }

// let nsp = 3;
// let nst = 1;
// for(let row=1;row<=4;row++){
//     //kuch space chapne h
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }
//     //kuch star chapne h
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }
//     //new line
//     console.log();
//     //update]
//     nsp=nsp-1;
//     nst=nst+2;
// }

/*
  *
 ***
*****
 ***
  *
*/
// let nsp = 2;
// let nst = 1;
// for(let row=1;row<=5;row++){
//     //kuch space chapne h
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }
//     //kuch star chapne h
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }
//     //new line me aana h
//     console.log();
    
//     //update
//     if(row<3){
//         nsp=nsp-1;
//         nst=nst+2;
//     }
//     else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }
// }

/*
*****
 ***
  *
*/

// let nsp = 0;
// let nst = 5;
// for(let row=1;row<=3;row++){
//     //space
//     for(let space=1;space<=nsp;space++){
//         process.stdout.write(" ")
//     }
//     //star
//     for(let star=1;star<=nst;star++){
//         process.stdout.write("*")
//     }
//     //new line
//     console.log();
    
//     //update
//     nsp=nsp+1;
//     nst=nst-2;
// }

/*
*****
 ***
  *
 ***
*****
*/
let nsp = 0;
let nst = 5;
for(let row=1;row<=5;row++){
    // space
    for(let space=1;space<=nsp;space++){
        process.stdout.write(" ")
    }
    //star
    for(let star=1;star<=nst;star++){
        process.stdout.write("*")
    }
    //new line
    console.log();
    
    //update
    if(row<3){
        nsp=nsp+1;
        nst=nst-2;
    }
    else{
        nsp=nsp-1;
        nst=nst+2;
    }
}