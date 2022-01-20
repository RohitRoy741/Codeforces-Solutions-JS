let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  lines = input.trim().split("\n");
  let x = 0;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i][1] === "+") {
      x++;
    } else {
      x--;
    }
  }
  console.log(x);
});
