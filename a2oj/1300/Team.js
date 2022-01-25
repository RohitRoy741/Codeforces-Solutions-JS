let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let result = 0;
  for (let i = 0; i < n; i++) {
    let sum = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element))
      .reduce((acc, element) => (acc += element), 0);
    if (sum >= 2) {
      result++;
    }
  }
  console.log(result);
});
