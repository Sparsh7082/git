for (let i = 1; i <= 7; i++) {
    if (i % 2 === 0) {
      continue; // Skips even numbers
    }
    console.log(i); // Prints odd numbers only
}

/*
dry run

l1 i=ram=1
    i<=7 1<=7 true

l2 i % 2 == 0    1 % 2 == 0 false

l5 1

l1 i=i+1 i=1+1 i=2
l1 i<=7 2<=7 true

l2 i % 2 == 0    2 % 2 == 0 true

l3 continue

l1 i=i+1 i=2+1 i=3
l1 i<=7 3<=7 true

l2 i % 2 == 0    3 % 2 == 0 false

l5 3

l1 i=i+1 i=3+1 i=4
l1 i<=7 4<=7 true

l2 i % 2 == 0    4 % 2 == 0 true

l3 continue

l1 i=i+1 i=4+1 i=5
l1 i<=7 5<=7 true

l2 i % 2 == 0    5 % 2 == 0 false

l5 5

l1 i=i+1 i=5+1 i=6
l1 i<=7 6<=7 true

l2 i % 2 == 0    6 % 2 == 0 true

l3 continue

l1 i=i+1 i=6+1 i=7
l1 i<=7 7<=7 true

l2 i % 2 == 0    7 % 2 == 0 false

l5 7

l1 i=i+1 i=7+1 i=8
l1 i<=7 8<=7 false

end of loop

*/