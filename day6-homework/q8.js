for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(`${i} is divisible by both 2 and 3`);
    } else if (i % 2 === 0) {
      console.log(`${i} is divisible by 2`);
    } else if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
    } else {
      console.log(`${i} is not divisible by 2 or 3`);
    }
}

/*
dry run

l1 i=ram=1
    i<=10 1<=10 true

l2 i % 2 == 0 && i % 3 == 0
    1 % 2 == 0 && 1 % 3 == 0 false

l4 i % 2 == 0
    1 % 2 == 0 false

l6 i % 3 == 0
    1 % 3 == 0 false

l9 1 is not divisible by 2 or 3

l1 i=i+1 i=1+1 i=2
    i<=10 2<=10 true

l2 i % 2 == 0 && i % 3 == 0
    2 % 2 == 0 && 2 % 3 == 0 false

l4 i % 2 == 0
    2 % 2 == 0 true
l5 2 is divisible by 2

l1 i=i+1 i=2+1 i=3
    i<=10 3<=10 true

l2 i % 2 == 0 && i % 3 == 0
    3 % 2 == 0 && 3 % 3 == 0 false

l4 i % 2 == 0
    3 % 2 == 0 false

l6 i % 3 == 0
    3 % 3 == 0 true
l7 3 is divisible by 3

l1 i=i+1 i=3+1 i=4
    i<=10 4<=10 true

l2 i % 2 == 0 && i % 3 == 0
    4 % 2 == 0 && 4 % 3 == 0 false

l4 i % 2 == 0
    4 % 2 == 0 true
l5 4 is divisible by 2

l1 i=i+1 i=4+1 i=5
    i<=10 5<=10 true

l2 i % 2 == 0 && i % 3 == 0
    5 % 2 == 0 && 5 % 3 == 0 false

l4 i % 2 == 0
    5 % 2 == 0 false

l6 i % 3 == 0
    5 % 3 == 0 false

l9 5 is not divisible by 2 or 3

l1 i=i+1 i=5+1 i=6
    i<=10 6<=10 true

l2 i % 2 == 0 && i % 3 == 0
    6 % 2 == 0 && 6 % 3 == 0 true
l3 6 is divisible by borth 2 and 3

l1 i=i+1 i=6+1 i=7
    i<=10 7<=10 true

l2 i % 2 == 0 && i % 3 == 0
    7 % 2 == 0 && 7 % 3 == 0 false

l4 i % 2 == 0
    7 % 2 == 0 false

l6 i % 3 == 0
    7 % 3 == 0 false

l9 7 is not divisible by 2 or 3

l1 i=i+1 i=7+1 i=8
    i<=10 8<=10 true

l2 i % 2 == 0 && i % 3 == 0
    8 % 2 == 0 && 8 % 3 == 0 false

l4 i % 2 == 0
    8 % 2 == 0 true
l5 8 is divisible by 2

l1 i=i+1 i=8+1 i=9
    i<=10 9<=10 true

l2 i % 2 == 0 && i % 3 == 0
    9 % 2 == 0 && 9 % 3 == 0 false

l4 i % 2 == 0
    9 % 2 == 0 false

l6 i % 3 == 0
    9 % 3 == 0 true
l7 9 is divisible by 3

l1 i=i+1 i=9+1 i=10
    i<=10 10<=10 true

l2 i % 2 == 0 && i % 3 == 0
    10 % 2 == 0 && 10 % 3 == 0 false

l4 i % 2 == 0
    10 % 2 == 0 true
l5 10 is divisible by 2

l1 i=i+1 i=10+1 i=11
    i<=10 11<=10 false

*/