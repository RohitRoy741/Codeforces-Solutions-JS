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
  let prices = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element))
    .sort((a, b) => a - b);
  let i = 0;
  let sum = 0;
  while (i < m && i < n && prices[i] <= 0) {
    sum -= prices[i];
    i++;
  }
  console.log(sum);
});
