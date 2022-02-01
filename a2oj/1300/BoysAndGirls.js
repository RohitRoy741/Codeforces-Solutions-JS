let fs = require("fs");
let input = "";
input += fs.readFileSync("input.txt");
let [n, m] = input
  .trim()
  .split(" ")
  .map((element) => parseInt(element));
let result = "";
if (n > m) {
  while (m > 0) {
    result += "BG";
    m--;
    n--;
  }
  while (n > 0) {
    result += "B";
    n--;
  }
} else {
  while (n > 0) {
    result += "GB";
    n--;
    m--;
  }
  while (m > 0) {
    result += "G";
    m--;
  }
}
fs.writeFileSync("output.txt", result);
