let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, m] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let count = 0;
  for (let i = 0; i <= n && i <= m; i++) {
    for (let j = 0; j <= n && j <= m; j++) {
      if (i * i + j === n && i + j * j === m) {
        count++;
      }
    }
  }
  console.log(count);
});
