let num = 1234;
let og = num;
let rev = 0;

let temp = num;
let nod = 0;

while(temp>0){
    temp = Math.floor(temp/10);
    nod++
}

let pow = Math.pow(10,nod-1)

while(num>0){
    let ld = num%10;
    rev = rev + (ld*pow);
    num = Math.floor(num/10);
    pow = pow/10
}

if(og==rev){
    console.log("palindrome");
    
} else{
    console.log("not palindrome");
}

/*

*/