let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let n = parseInt(input.trim());
  process.stdout.write(n + " ");
  for (let i = 1; i < n; i++) {
    process.stdout.write(i + " ");
  }
});
