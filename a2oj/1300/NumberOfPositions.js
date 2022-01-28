let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, front, back] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  console.log(Math.min(n - front, back + 1));
});
