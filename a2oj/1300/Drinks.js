let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let sum = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element))
    .reduce((accumulator, element) => (accumulator += element), 0);
  console.log(sum / n);
});
