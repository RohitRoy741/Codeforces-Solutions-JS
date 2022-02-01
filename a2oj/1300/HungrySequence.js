let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let n = parseInt(input.trim());
  for (let i = 0; i < n; i++) {
    process.stdout.write(n + i + " ");
  }
});
