/*
connect to server
then explore courses
then select course
then onboard


*/

//without any callbacks - means it does not follow any sequence

// function connecttoserver(){
//     console.log("connecting.....");
    
//     setTimeout(()=>{console.log("connected");},3000);
// }

// function explore(){
//     console.log("exploring....");

//     setTimeout(()=>{console.log("explored");},2000);
    
// }

// function selectcourse(){
//     console.log("selecting.....");

//     setTimeout(()=>{"selected"},1000);
    
// }

// function onboard(){
//     console.log("enrolled");
    
// }

// connecttoserver();
// explore();
// selectcourse();
// onboard();


//with any callbacks - means it follow the sequence

function connecttoserver(callbacks){
    console.log("connecting.....");
    
    setTimeout(()=>{console.log("connected");
        callbacks();
    },3000);
}

function explore(callbacks){
    console.log("exploring....");

    setTimeout(()=>{console.log("explored");
        callbacks();
    },2000);
    
}

function selectcourse(callbacks){
    console.log("selecting.....");

    setTimeout(()=>{console.log("selected")
        callbacks();
    },1000);
    
}

function onboard(){
    console.log("enrolled");
    
}

connecttoserver(()=>{
    explore(()=>{
        selectcourse(()=>{
            onboard()
        })
    })
})

// connecttoserver(explore(selectcourse(onboard())))