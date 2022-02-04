let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let n = parseInt(input.trim());
  let count = 0;
  let squares = new Map();
  for (let i = 1; i <= n; i++) {
    squares.set(i * i, i);
  }
  for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      c = a * a + b * b;
      if (squares.has(c)) {
        count++;
      }
    }
  }
  console.log(count);
});
