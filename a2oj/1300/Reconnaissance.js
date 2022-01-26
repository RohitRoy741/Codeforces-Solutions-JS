let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let soldiers = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let min = Math.max(...soldiers);
  let index1, index2;
  for (let i = 0; i < n; i++) {
    if (Math.abs(soldiers[i] - soldiers[(i + 1) % n]) < min) {
      min = Math.abs(soldiers[i] - soldiers[(i + 1) % n]);
      index1 = i;
      index2 = (i + 1) % n;
    }
  }
  console.log(index1 + 1, index2 + 1);
});
