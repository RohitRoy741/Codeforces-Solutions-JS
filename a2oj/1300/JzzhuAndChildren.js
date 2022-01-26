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
  let arr = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let last = 1;
  let turns = Math.ceil(arr[last - 1] / m);
  for (let i = 1; i < n; i++) {
    if (Math.ceil(arr[i] / m) >= turns) {
      last = i + 1;
      turns = Math.ceil(arr[i] / m);
    }
  }
  console.log(last);
});
