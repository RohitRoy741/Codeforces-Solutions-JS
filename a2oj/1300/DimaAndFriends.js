let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  n++;
  let fingers = lines[1]
    .trim()
    .split(" ")
    .map((finger) => parseInt(finger))
    .reduce((acc, element) => (acc += element), 0);
  let result = 0;
  for (let i = 1; i <= 5; i++) {
    if ((fingers + i) % n !== 1) {
      result++;
    }
  }
  console.log(result);
});
