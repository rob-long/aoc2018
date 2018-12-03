const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf8');
const boxes = data.split('\n');

/*
let two = 0,
  three = 0;
boxes.forEach(box => {
  const chars = box.split('');
  const index = chars.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});

  if (Object.values(index).includes(2)) {
    two++;
  }
  if (Object.values(index).includes(3)) {
    three++;
  }
});
*/

const checksums = boxes.sort().reduce((acc, curr, idx) => {
  const chars = curr.split('');
  if (idx < boxes.length - 1 && diff(chars, boxes[idx + 1].split('')) === 1) {
    console.log(curr);
    console.log(boxes[idx + 1]);
  }
}, {});

function diff(a_ch, b_ch) {
  return a_ch.reduce((acc, curr, idx) => {
    const d = curr === b_ch[idx] ? 0 : 1;
    return acc + d;
  }, 0);
}
