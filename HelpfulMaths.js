let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let arr = input.trim().split("+");
  arr.sort((a, b) => a - b);
  console.log(arr.join("+"));
});
