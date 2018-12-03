const fs = require('fs');
const data = fs.readFileSync('./input3.txt', 'utf8');

const claims = new Map();
const overlaps = new Set();

for (const line of data.split('\n')) {
  const result = RegExp(/(\d+) @ (\d+),(\d+)\: (\d+)x(\d+)/).exec(line);

  if (result !== null) {
    const id = Number(result[1]);
    const l = Number(result[2]);
    const t = Number(result[3]);
    const w = Number(result[4]);
    const h = Number(result[5]);

    for (let y = t; y < t + h; y++) {
      for (let x = l; x < l + w; x++) {
        const key = `${x},${y}`;

        if (!claims.has(key)) {
          claims.set(key, []);
        }

        claims.set(key, claims.get(key).concat(id));

        if (claims.get(key).length >= 2) {
          overlaps.add(key);
        }
      }
    }
  }
}

console.log(overlaps.size);
