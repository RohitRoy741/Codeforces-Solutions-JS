let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, m] = input
    .trim()
    .split("\n")
    .map((num) => num.trim().split(""));
  let result = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== m[i]) {
      result.push("1");
    } else {
      result.push("0");
    }
  }
  console.log(result.join(""));
});
