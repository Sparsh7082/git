let count = 0;

while (count < 10) {
  console.log(count);
  if (count === 5) {
    break; // Exits the loop when count is 5
  }
  count++;
}

/*
dry run

l1 count=ram=0

l3 count<10 0<10 true

l4 0

l5 count==5 0==5 false

l8 count=count+1 count=0+1 count=1

l3 count<10 1<10 true

l4 1

l5 count==5 1==5 false

l8 count=count+1 count=1+1 count=2

l3 count<10 2<10 true

l4 2

l5 count==5 2==5 false

l8 count=count+1 count=2+1 count=3

l3 count<10 3<10 true

l4 3

l5 count==5 3==5 false

l8 count=count+1 count=3+1 count=4

l3 count<10 4<10 true

l4 4

l5 count==5 4==5 false

l8 count=count+1 count=4+1 count=5

l3 count<10 5<10 true

l4 5

l5 count==5 5==5 true

l6 break

*/