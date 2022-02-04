let fs = require("fs");
let input = "";
input += fs.readFileSync("input.txt");
let lines = input.trim().split("\n");
let n = parseInt(lines[0].trim());
let a = lines[1]
  .trim()
  .split(" ")
  .map((element) => parseInt(element));
let freq = new Map();
for (let i = 0; i < 2 * n; i++) {
  if (freq.has(a[i])) {
    let x = freq.get(a[i]);
    x[0] = x[0] + 1;
    x.push(i);
    freq.set(a[i], x);
  } else {
    freq.set(a[i], [1, i]);
  }
}
let results = "";
for (let key of freq.keys()) {
  let x = freq.get(key);
  if (x[0] % 2 === 0) {
    for (let i = 1; i < x[0]; i += 2) {
      results = results + (x[i] + 1) + " " + (x[i + 1] + 1) + "\n";
    }
  } else {
    fs.writeFileSync("output.txt", "-1");
    return;
  }
}
fs.writeFileSync("output.txt", results.trimEnd());
