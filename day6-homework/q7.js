let x = 0;

while (x < 5) {
  x++;
  if (x === 3) {
    continue; // Skips the rest of the code when x is 3
  }
  console.log(x);
}


/*
dry run

l1 x=ram=0

l3 x<5 0<5 true

l4 x=x+1 x=0+1 x=1

l5 x==3 1==3 false

l8 1

l3 x<5 1<5 true

l4 x=x+1 x=1+1 x=2

l5 x==3 2==3 false

l8 2

l3 x<5 2<5 true

l4 x=x+1 x=2+1 x=3

l5 x==3 3==3 true

l6 continue

l3 x<5 3<5 true

l4 x=x+1 x=3+1 x=4

l5 x==3 4==3 false

l8 4

l3 x<5 4<5 true

l4 x=x+1 x=4+1 x=5

l5 x==3 5==3 false

l8 5

l3 x<5 5<5 false

*/