let i;
let outputRemainThree = 'Fizz';
let outputRemainFive = 'Buzz';

/*
for (i = 1; i <= 100; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(outputRemainThree + outputRemainFive);
  } else if (i % 5 == 0) {
    console.log(outputRemainFive);
  } else if (i % 3 == 0) {
    console.log(outputRemainThree);
  }
}
*/

// solution with ternary operator
for (i = 1; i <= 100; i++) {
  i % 3 != 0 && i % 5 != 0
    ? console.log(i)
    : i % 3 == 0 && i % 5 == 0
    ? console.log(outputRemainThree + outputRemainFive)
    : i % 5 == 0
    ? console.log(outputRemainFive)
    : console.log(outputRemainThree);
}
