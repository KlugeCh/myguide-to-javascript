let arrResult = [];

const range = (start, end, step) => {
  if (step === undefined || step == 0) {
    for (let i = start; i <= end; i++) arrResult.push(i);
  } else {
    for (let i = start; i <= end; i += step) arrResult.push(i);
  }

  console.log('values : ' + arrResult);
  return arrResult;
};

const sum = (arrResult) => {
  let addResult = 0;
  for (let value of arrResult) {
    addResult += value;
  }
  console.log('adding : ' + addResult);
  return addResult;
};

console.log(sum(range(-2, 10, 2)));

// console.log(range(1, 10, 2));
