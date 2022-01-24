let n = "";
process.stdin.on("data", (chunk) => {
  n += chunk;
  n = parseInt(n);
});
process.stdin.on("end", () => {
  if (n % 2 === 1) {
    console.log(-1);
  } else {
    for (let i = 1; i < n; i += 2) {
      process.stdout.write(i + 1 + " " + i + " ");
    }
  }
});
