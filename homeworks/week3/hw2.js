const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  // '5 200' '=>' ['5', '200']
  const temp = input[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
  /* eslint-disable */	
  if (isNarcissistic(i) === true) {
      console.log(i);
    }
  }
}

function digitsCount(n) {
  if (n === 0) return 1; {
    let result = 0;
    while (n !== 0) {
    	/* eslint-disable */
      const c = Math.floor(n / 10);
      result += 1;
    } return result;
  }
}

function isNarcissistic(n) {
  let m = n;
  const digit = digitsCount(m);
  let sum = 0;
  while (m !== 0) {
    const number = m % 10;
    sum += number ** digit;
    m = Math.floor(m / 10);
  }

  // 可簡化成
  // return sum === n
  if (sum === n) {
    return true;
  }
  return false;
}

rl.on('close', () => {
  solve(lines);
});
