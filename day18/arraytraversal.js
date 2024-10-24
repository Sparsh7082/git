let arr = [1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]*2)
}

// print the even numbers

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

// print maximum number from an array

let max = 0;
for(let i=0; i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);

// print minimum number from an array

let min = 100;
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i]
    }
}
console.log(min);

// find first index of a number in array
let arr2 = [1,200,3,4,5,1,2,3,4,1,3]

let target = 1;
let ans = 0;
for (let i=0; i<arr2.length;i++){
    if(target==arr2[i]){
        ans = i;
        break;
    }
}
console.log(ans);


// find last index of a number in array

let target1 = 1;
let ans1 = 0;
for (let i=0; i<arr2.length;i++){
    if(target1==arr2[i]){
        ans1=i;
    }
}
console.log(ans1);

// reverse an array

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);   
}