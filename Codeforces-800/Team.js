let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  let n = parseInt(lines[0]);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let [a, b, c] = lines[i].split(" ").map((element) => parseInt(element));
    if (a + b + c >= 2) {
      result++;
    }
  }
  console.log(result);
});
