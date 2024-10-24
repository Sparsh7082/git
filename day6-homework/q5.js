let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


/*
dry run

l1 day=ram=3

l3 switch(day)

l4 case 1  3==1 false

l7 case 2 3==2 false

l10 case 3 3==3 true

l11 Wednesday

l12 break
*/