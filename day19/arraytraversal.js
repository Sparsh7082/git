let names = ["vikas","rohan","puneet","reena","seema","rani","kalu"]


// for loop

// for(let idx=0;idx<names.length;idx++){
//     console.log(names[idx])
// }

// while loop

// let idx=0;
// while(idx<names.length){
//     console.log(names[idx]);
//     idx++;
// }

// do while loop

// let idx = 0;
// do {
//     console.log(names[idx]);
//     idx++;
// } while (idx<names.length);

// for of loop

// for(let student of names){
//     console.log(student); 
// }

// for each loop
// names.forEach(function fun(student){
//     console.log(student);  
// })



let arr = [100,200,"vikas",[1,2,3,4,5],function fun(){console.log("I am fun");},function fun2(){return "dice academy"}]

// // for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// console.log("-------------------");

// while loop
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;    
// }


// do while
// let i=0;
// do {
//     console.log(arr[i]);
//     i++;
    
// } while (i<arr.length);

// for of

// for(let array of arr){
//     console.log(array);   
// }


// for each

// arr.forEach(function fun(array){
//     console.log(array);    
// })

// last function fire

// console.log(arr[arr.length-1]());


// catch the return of last function
// let rv = arr[arr.length-1]();
// console.log(rv);


// accessing the array element of nested array

console.log(arr[3][arr[3].length-1]);