let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, a, b, c] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let arr = [a, b, c];
  let t = [];
  for (let i = 0; i <= 3; i++) {
    let row = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        row.push(0);
      } else if (i === 0) {
        row.push(-10000);
      }
    }
    t.push(row);
  }
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr[i - 1] > j) {
        t[i][j] = t[i - 1][j];
      } else {
        t[i][j] = Math.max(1 + t[i][j - arr[i - 1]], t[i - 1][j]);
      }
    }
  }
  console.log(t[3][n]);
});
