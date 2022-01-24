let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let current = 0,
    max = 0;
  for (let i = 0; i < n; i++) {
    let [exit, enter] = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    current = current - exit + enter;
    if (current > max) {
      max = current;
    }
  }
  console.log(max);
});
