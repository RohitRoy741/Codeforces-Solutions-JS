let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let x = 0,
    y = 0,
    z = 0;
  for (let i = 0; i < n; i++) {
    let [xi, yi, zi] = lines[i + 1]
      .split(" ")
      .map((coordinate) => parseInt(coordinate));
    x += xi;
    y += yi;
    z += zi;
  }
  if (x === 0 && y === 0 && z === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
