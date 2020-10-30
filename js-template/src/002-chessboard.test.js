const spaceChar = ' ';
const signChar = '#';
let output = '';
const size = 8;

// counting and cotrolling rows
for (let i = 1; i <= size; i++) {
  // counting and building strings in the row
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
