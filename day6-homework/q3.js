for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        break; // Exits the inner loop when i=2 and j=2
      }
      console.log(`i = ${i}, j = ${j}`);
    }
}

/*
dry run

l1 i=ram=1
    i<=3 1<=3 true

l2 j=ram=1
    j<=3 1<=3 true

l3 i==2 && j==2
    1==2 && 1==2 false

l6 i=1, j=1

l2 j=j+1 j=1+1 j=2
    j<=3 2<=3 true

l3 i==2 && j==2
    1==2 && 2==2 false

l6 i=1, j=2

l2 j=j+1 j=2+1 j=3
    j<=3 3<=3 true

l3 i==2 && j==2
    1==2 && 3==2 false

l6 i=1, j=3

l2 j=j+1 j=3+1 j=4
    j<=3 4<=3 false

l1 i=i+1 i=1+1 i=2
    i<=3 2<=3 true

l2 j=ram=1
    j<=3 1<=3 true

l3 i==2 && j==2
    2==2 && 1==2 false

l6 i=2, j=1

l2 j=j+1 j=1+1 j=2
    j<=3 2<=3 true

l3 i==2 && j==2
    2==2 && 2==2 true

l4 break

l1 i=i+1 i=2+1 i=3
    i<=3 3<=3 true

l2 j=ram=1
    j<=3 1<=3 true

l3 i==2 && j==2
    3==2 && 1==2 false

l6 i=3, j=1

l2 j=j+1 j=1+1 j=2
    j<=3 2<=3 true

l3 i==2 && j==2
    3==2 && 2==2 false

l6 i=3, j=2

l2 j=j+1 j=2+1 j=3
    j<=3 3<=3 true

l3 i==2 && j==2
    3==2 && 3==2 false

l6 i=3, j=3

l2 j=j+1 j=3+1 j=4
    j<=3 4<=3 false

l1 i=i+1 i=3+1 i=4
    i<=3 4<=3 false

*/