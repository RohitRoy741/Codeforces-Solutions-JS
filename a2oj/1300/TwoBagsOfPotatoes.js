let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [y, k, n] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  if (n - Math.floor(y / k) * k < k) {
    console.log(-1);
  } else {
    for (let i = (Math.floor(y / k) + 1) * k; i <= n; i += k) {
      process.stdout.write(i - y + " ");
    }
  }
});
