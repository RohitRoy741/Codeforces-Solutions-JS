let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let sum = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element))
    .reduce((acc, element) => (acc += element), 0);
  if (sum % n === 0) {
    console.log(n);
  } else {
    console.log(n - 1);
  }
});
