// let name = "sparsh"
// console.log(name.charCodeAt(2));

/*
ABCDE
 BCDE
  CDE
   DE
    E


*/
// let nsp = 0;
// for(let row=1;row<=5;row++){
//     let ans = "";
//     //space
//     for(let space=1;space<=nsp;space++){
//         ans = ans + " ";
//     }
//     //star
//     for(let star=1;star<=5-row+1;star++){
//         ans = ans + "*";
//     }
//     //new line
//     console.log(ans);    
//     //update
//     nsp=nsp+1;
// }

let nsp=0;
let val=65;
for(let row=1;row<=5;row++){
    let ans='';
    for(let space=1;space<=nsp;space++){
        ans=ans+" "
    }
    for(let char=0;char<5-row+1;char++){
        ans=ans+(String.fromCharCode(val+char));
        
    }
    val++;
    console.log(ans);
    
    nsp=nsp+1;
    
}

/*
l12 nsp=ram=0
l13 val=ram=65
l14 row=ram=1
    row<=5 1<=5 true
l15 ans=ram=''
l16 space=ram=1
    space<=nsp 1<=0 false
l19 char=ram=0
    char<5-row+1 0<5-1+1 0<5 true
l20 ans=''+(65+0) ans=A
l19 char=char+1 0+1 char=1
    char<5-row+1 1<5-1+1 1<5 true
l20 ans=''+(65+1) ans=B

*/

/*
A
AB
ABC
ABCD
ABCDE
*/

// for(let row=1;row<=5;row++){
//     let ans = "";
//     for(let star=1;star<=row;star++){
//         ans = ans + "*";
//     }
//     console.log(ans);   
// }


// for(let row=1;row<=5;row++){
//     let ans = "";
//     let val = 65;
//     for(let star=1;star<=row;star++){
//         ans = ans + (String.fromCharCode(val));
//         val++;
//     }
//     console.log(ans);   
// }