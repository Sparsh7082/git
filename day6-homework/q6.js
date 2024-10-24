for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
      break; // Exits the loop after first divisible by 3 number is found
    }
}


/*
dry run

l1 i=ram=1
    i<=10 1<=10 true

l2 i % 3 == 0
    1 % 3 == 0 false

l1 i=i+1 i=1+1 i=2
    i<=10 2<=10 true

l2 i % 3 == 0
    2 % 3 == 0 false

l1 i=i+1 i=2+1 i=3
    i<=10 3<=10 true

l2 i % 3 == 0
    3 % 3 == 0 true

l3 3 is divisible by 3

l4 break

*/