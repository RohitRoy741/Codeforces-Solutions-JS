let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let n = parseInt(input.trim());
  for (let i = 0; i <= n; i++) {
    let line = "";
    for (let j = 2 * n; j > 2 * i; j--) {
      line += " ";
    }
    for (let j = 0; j <= i; j++) {
      line = line + j + " ";
    }
    for (let j = i - 1; j >= 0; j--) {
      line = line + j + " ";
    }
    console.log(line.trimEnd());
  }
  for (let i = n - 1; i >= 0; i--) {
    let line = "";
    for (let j = 0; j < 2 * (n - i); j++) {
      line += " ";
    }
    for (let j = 0; j <= i; j++) {
      line = line + j + " ";
    }
    for (let j = i - 1; j >= 0; j--) {
      line = line + j + " ";
    }
    console.log(line.trimEnd());
  }
});
