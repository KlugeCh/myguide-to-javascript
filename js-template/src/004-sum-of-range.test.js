let arrResult = [];

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    arrResult.push(i);
  }
  console.log('range: ' + arrResult);
  return arrResult;
};

const sum = (arrResult) => {
  let addResult = 0;
  for (let value of arrResult) {
    addResult += value;
  }
  console.log('adding: ' + addResult);
  return addResult;
};

// console.log(sum(range(1, 10)));

console.log(sum(range(-1, 5)));
