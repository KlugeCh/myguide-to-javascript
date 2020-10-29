const spaceChar = ' ';
const signChar = '#';
let output = '';
const size = 8;

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 == 0) {
      output += spaceChar;
    } else {
      output += signChar;
    }
  }
  output += '\n';
}
console.log(output);
