
/*
task1  - server se connect kro
task 2 - course explore
task 3 - course selection 
task 4 - class enroll
*/

function connectToDiceServer(){
    console.log("connecting to dice server ...ting ting ting ....")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let connected =true;
            if(connected==true){
                resolve("connected to server")
            }else{
                reject("connection failed .. please try again error 4040")
            }
        }, 3000);
    })
}

function courseExplore(){
    setTimeout(() => {
        console.log("exploring the courses .......")
    }, 2000);
    return new Promise((resolve ,reject)=>{
        setTimeout(() => {
            let courseFound=true;
            if(courseFound==true){
                console.log("course available")
                resolve(["js","advance js","DSA","SYSTEM DESIGN"])
            }else{
                reject("no course available")
            }
        }, 3000);
    })
}

function courseSelection(courseName){
    console.log("selecting the course.....")
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(courseName){
                resolve(courseName)
            }else{
                reject("please select a valid course name")
            }
        }, 3000);
    })
}


function classEnroll(courseName){
    return new Promise((resolve , reject)=>{
        console.log("enrolling into the class....")
        setTimeout(() => {
            let enrollmentsucess=false;
            if(enrollmentsucess==true){
                resolve(courseName)
            }else{
                reject("enrollment is failed")
            }
        }, 3000);
    })
}




connectToDiceServer()
.then((connectStatus)=>{
    console.log(connectStatus)
    return courseExplore();
})
.then((courses)=>{
    console.log("course found ",courses)
    return courseSelection(courses[2]);
})
.then((selectedCourse)=>{
    console.log("your seelcted course is -",selectedCourse)
    return classEnroll(selectedCourse);
})
.then(()=>{
    console.log("process done ")
})
.catch((err)=>{
    console.log(err);    
})