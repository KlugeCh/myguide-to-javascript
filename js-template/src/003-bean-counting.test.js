/* Write a function countChars that takes a string as its only argument and returns
 * a number that indicates how many uppercase “  ” characters there are in the
 * string.
 *
 * Next, write a function called countParam that behaves like countChars, except
 * it takes a second argument that indicates the character that is to be counted
 */

let testString = 'Bouncing Bean Counting'; // -> result is 2 UpperCase 'B's

const countChars = (str) => {
  return countParam(str, 'B');
};

const countParam = (str, char) => {
  let counter = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == char) {
      counter++;
    }
  }
  return console.log(' ' + char + ' is  ' + counter + ' time in String : ' + testString);
};

countParam(testString, 'N');
countParam(testString, 'B');
countParam(testString, 'n');
// counting only 'B', invoking countParams
countChars(testString);
