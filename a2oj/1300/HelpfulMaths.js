let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let result = input
    .trim()
    .split("+")
    .map((element) => parseInt(element))
    .sort((a, b) => a - b)
    .join("+");
  console.log(result);
});
