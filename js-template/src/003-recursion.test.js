/**
 * Here’s another way to define whether a positive whole number is even or odd:
 * • Zero is even.
 * • One is odd.
 * • For any other number N, its evenness is the same as N - 2.
 * Define a recursive function isEven corresponding to this description. The
 * function should accept a single parameter (a positive, whole number) and return
 * a Boolean.
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
 * way to fix this?
 */

isEven(50);
isEven(75);
isEven(-1);

/*
const isEven = (a) => {
  a % 2 < 0 ? console.log('invalid number') : a % 2 == 0 ? console.log(a + ' is even') : console.log(a + ' is odd');
};
*/

function isEven(a) {
  if (a < 0) {
    return console.log('invalid input');
  } else if (a == 0) {
    return console.log('is even');
  } else if (a == 1) {
    return console.log('is not even');
  } else return isEven(a - 2);
}
