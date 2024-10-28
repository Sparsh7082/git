/*
*
**
***
****
*****
*/
for(let row=1;row<=5;row++){
    
    // stars ki chapai
    for(let star=1;star<=row;star++){
        process.stdout.write("*")
    }
    console.log();
}

console.log("-----------------------------");

/*
*****
****
***
**
*
*/
for(let row=1;row<=5;row++){

    //kuch stars chapne h
    for(let star=1;star<=5-row+1;star++){
        process.stdout.write("*")
    }
    //new line me aana h
    console.log();
}

console.log("-----------------------------");

for(let row=1;row<=5;row++){

    //kuch stars chapne h
    for(let star=5;star>=row;star--){
        process.stdout.write("*")
    }
    //new line me aana h
    console.log();
}

console.log("-----------------------------");

