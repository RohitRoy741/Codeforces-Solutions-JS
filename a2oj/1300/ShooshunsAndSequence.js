let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, k] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let sequence = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  for (let i = k; i < n; i++) {
    if (sequence[i] != sequence[k - 1]) {
      console.log(-1);
      return;
    }
  }
  for (let i = k - 2; i >= 0; i--) {
    if (sequence[i] !== sequence[k - 1]) {
      console.log(i + 1);
      return;
    }
  }
  console.log(0);
});
