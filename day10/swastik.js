for(row=1;row<=7;row++){
    for(col=1;col<=7;col++){
        if(row==1){
            if(col==1 || col>3){
                process.stdout.write("* ")
            } else{
                process.stdout.write("  ")
            }
        }else if(row<4){
            if(col==1 || col==4){
                process.stdout.write("* ")
            } else{
                process.stdout.write("  ")
            }           
        }else if(row==4){
            process.stdout.write("* ")
        }else if(row<7){
            if(col==4 || col==7){
                process.stdout.write("* ")
            } else{
                process.stdout.write("  ")
            }
        }else{
            if(col==7 || col<5){
                process.stdout.write("* ")
            } else{
                process.stdout.write("  ")
            }
        }
    }
    console.log();
    
}