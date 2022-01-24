let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let awesome = 0;
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let scores = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let min = scores[0],
    max = scores[0];
  for (let i = 1; i < n; i++) {
    if (scores[i] < min || scores[i] > max) {
      if (scores[i] < min) {
        min = scores[i];
      }
      if (scores[i] > max) {
        max = scores[i];
      }
      awesome++;
    }
  }
  console.log(awesome);
});
