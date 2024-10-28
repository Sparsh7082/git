/*
1
22
333
4444
55555
*/
// for(let row=1;row<=5;row++){
//     //stars
//     for(star=1;star<=row;star++){
//         process.stdout.write("*")
//     }
//     //new line
//     console.log();
// }

// for(let row=1;row<=5;row++){
//     let ans='';
//     //stars
//     for(star=1;star<=row;star++){
//         ans=ans+row;
//     }
//     //new line
//     console.log(ans);
// }

/*
55555
 4444
  333
   22
    1
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

// let nsp = 0;
// let nst = 5;
// let val = 5;
// for(let row=1;row<=5;row++){
//     let ans="";
//     //kuch space chapne h
//     for(let space=1;space<=nsp;space++){
//         ans=ans+" ";
//     }
//     //kuch star chapne h
//     for(let star=1;star<=nst;star++){
//         ans=ans+val;
//     }
//     //new line me aana h
//     console.log(ans);
//     //update
//     nsp=nsp+1;
//     nst=nst-1;
//     val--;
// }

/*
    1
  2 3 4
5 6 7 8 9
 101112
   13
*/
// let nsp=4;
// let nst=1;
// for(let row=1;row<=5;row++){
//     let ans = "";
//     //space
//     for(let space=1;space<=nsp;space++){
//         ans = ans + " "
//     }
//     //star
//     for(let star=1;star<=nst;star++){
//         ans = ans + "* "
//     }
//     //new line
//     console.log(ans);
    
//     //update
//     if(row<3){
//         nsp=nsp-2;
//         nst=nst+2;
//     }
//     else{
//         nsp=nsp+2;
//         nst=nst-2;
//     }
// }

let nsp=4;
let nst=1;
let val=1;
for(let row=1;row<=5;row++){
    let ans = "";
    //space
    for(let space=1;space<=nsp;space++){
        ans = ans + " "
    }
    //star
    for(let star=1;star<=nst;star++){
        if(row<4){
            ans = ans + val + " ";    
        }
        else{
            ans = ans + val;
        }
        // ans = ans + val + " ";
        val++;
    }
    //new line
    console.log(ans);
    
    //update
    if(row<3){
        nsp=nsp-2;
        nst=nst+2;
    }
    else if(row==3){
        nsp=nsp+1;
        nst=nst-2;
    }
    else{
        nsp=nsp+2;
        nst=nst-2;
    }
}

