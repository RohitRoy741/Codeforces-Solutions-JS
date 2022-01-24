let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function numberOfLuckyDigits(n) {
  let digits = 0;
  for (let ch of n) {
    if (ch === "4" || ch === "7") {
      digits++;
    }
  }
  return digits;
}
process.stdin.on("end", () => {
  let n = numberOfLuckyDigits(input.trim());
  if (n === 7 || n === 4) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
