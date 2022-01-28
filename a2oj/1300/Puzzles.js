let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, m] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let puzzles = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  puzzles.sort((a, b) => a - b);
  let min = puzzles[m - 1] - puzzles[0];
  for (let i = 0; i < m - n + 1; i++) {
    if (puzzles[i + n - 1] - puzzles[i] < min) {
      min = puzzles[i + n - 1] - puzzles[i];
    }
  }
  console.log(min);
});
