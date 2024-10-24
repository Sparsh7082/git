let nsp=1;
let nst=5;

for(let row=1;row<=5;row=row+1){
    for(let space=0;space<=nsp;space=space+1){
        Process.stdout.write(" ")
    }
    for(let star=1;star<=nst;star=star+1){
        process.stdout.write("*")
    }
}
