let i;
let modThree = 'Fizz';
let modFive = 'Buzz';

for (i = 1; i <= 100; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(modThree + modFive);
  } else if (i % 5 == 0) {
    console.log(modFive);
  } else if (i % 3 == 0) {
    console.log(modThree);
  }
}
