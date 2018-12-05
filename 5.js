const fs = require('fs');
const data = fs.readFileSync('./input5b.txt', 'utf8');

function removeBond(poly) {
  while (true) {
    let i = 0;
    for (let j = i; i < poly.length - 1; j++) {
      const found = poly.findIndex(
        (e, idx, arr) =>
          idx < poly.length - 1 &&
          e !== arr[idx + 1] &&
          e.toLowerCase() === arr[idx + 1].toLowerCase()
      );
      if (found >= 0) {
        i = found ? found - 1 : 0;
        poly.splice(found, 2);
        break;
      } else {
        return poly;
      }
    }
  }
}
