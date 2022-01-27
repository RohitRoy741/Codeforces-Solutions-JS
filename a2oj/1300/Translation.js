let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [berland, birland] = input.trim().split("\n");
  berland = berland.trim();
  birland = birland.trim();
  if (berland.length !== birland.length) {
    console.log("NO");
    return;
  }
  let n = berland.length;
  for (let i = 0; i < n; i++) {
    if (berland[i] !== birland[n - i - 1]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
});
