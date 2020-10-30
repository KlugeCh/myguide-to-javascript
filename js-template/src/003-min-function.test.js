/**
 *  Write a function min that takes two arguments and returns their minimum.
 */

// with defined function
const definedMinimum = function (a, b) {
  console.log('defined function: ' + Math.min(a, b));
};

// wiht declared function
function declaredMinimum(a, b) {
  console.log('declared function: ' + Math.min(a + 1, b));
}
// arrow funtion
const arrowMinimum = (a, b) => {
  console.log('arrow function: ' + Math.min(a + 2, b));
};

const callerFunction = (a, b) => {
  definedMinimum(a, b);
  declaredMinimum(a, b);
  arrowMinimum(a, b);
};

callerFunction(12, 333);
