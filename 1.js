const fs = require('fs');
const data = fs.readFileSync('./input1.txt', 'utf8');
const numbers = data.split('\n');

const history = [];
let answer = 0;
let result = 0;
while (!answer) {
  result = numbers.reduce((acc, curr, idx, array) => {
    const num = Number(curr.substring(1));
    '-' === curr.charAt(0) ? (acc -= num) : (acc += num);
    return history.includes(acc) ? (array.splice(idx), (answer = acc)) : history.push(acc), acc;
  }, result);
}
console.log({ answer: answer });
