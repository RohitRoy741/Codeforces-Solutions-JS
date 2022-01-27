let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let axle = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let m = parseInt(lines[2]);
  let rear = lines[3]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let maxRatio = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rear[j] % axle[i] === 0 && rear[j] / axle[i] > maxRatio) {
        maxRatio = rear[j] / axle[i];
      }
    }
  }
  let gears = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (rear[j] % axle[i] === 0 && rear[j] / axle[i] === maxRatio) {
        gears++;
      }
    }
  }
  console.log(gears);
});
