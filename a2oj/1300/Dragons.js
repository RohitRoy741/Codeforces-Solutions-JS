let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [s, n] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let dragons = [];
  for (let i = 0; i < n; i++) {
    let [x, y] = lines[1 + i]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    dragons.push([x, y]);
  }
  dragons.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) {
    if (dragons[i][0] < s) {
      s += dragons[i][1];
    } else {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
});
