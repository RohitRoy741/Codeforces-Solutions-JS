let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let stones = lines[1].trim();
  let pairs = 0;
  for (let i = 0; i < n - 1; i++) {
    if (stones[i] === stones[i + 1]) {
      pairs++;
    }
  }
  console.log(pairs);
});
