let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let sequence = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  sequence.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < n / 3; i++) {
    if (
      sequence[i] < sequence[i + n / 3] &&
      sequence[i + n / 3] < sequence[i + (2 * n) / 3]
    ) {
      if (
        sequence[i + n / 3] % sequence[i] === 0 &&
        sequence[i + (2 * n) / 3] % sequence[i + n / 3] === 0
      ) {
        results.push([
          sequence[i],
          sequence[i + n / 3],
          sequence[i + (2 * n) / 3],
        ]);
      } else {
        console.log(-1);
        return;
      }
    } else {
      console.log(-1);
      return;
    }
  }
  for (let result of results) {
    console.log(result[0], result[1], result[2]);
  }
});
