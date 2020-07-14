const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});
/* eslint-disable consistent-return */
function bigOrSmall(str) {
  const s = str.split(' ');
  /* global BigInt */
  const a = BigInt(s[0]);
  const b = BigInt(s[1]);
  if (a === b) return 'DRAW';
  if (Number(s[2]) === 1) {
    if (a > b) {
      return 'A';
    }
    return 'B';
  }
  if (Number(s[2]) === -1) {
    if (a < b) {
      return 'A';
    }
    return 'B';
  }
}

function solve(input) {
  const m = Number(input[0]);
  for (let i = 1; i <= m; i += 1) {
    console.log(bigOrSmall(input[i]));
  }
}


rl.on('close', () => {
  solve(lines);
});
