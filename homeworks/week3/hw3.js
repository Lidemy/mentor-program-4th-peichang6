const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i += 1) {
  /* eslint-disable */  
    console.log(isPrime(Number(input[i])) ? 'Prime' : 'Composite');
  }
}
function countFactor(number) {
  let result = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result += 1;
    }
  }
  return result;
}

function isPrime(number) {
  if (number === 1) return false;
  if (countFactor(number) === 2) {
    return true;
  } return false;
}

rl.on('close', () => {
  solve(lines);
});
