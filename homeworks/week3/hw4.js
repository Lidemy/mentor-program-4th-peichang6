const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function reverse(str) {
  let result = '';
  // c = result + a[0] + a[1] + a[2]
  // console.log(c)
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

// input: abbbba
function solve(input) {
  const s = input[0];
  if (reverse(s) === s) {
    console.log('True');
  } else {
    console.log('False');
  }
}


rl.on('close', () => {
  solve(lines);
});
