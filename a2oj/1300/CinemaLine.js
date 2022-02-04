let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let bill25 = 0,
    bill50 = 0;
  let n = parseInt(lines[0].trim());
  bills = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  for (let i = 0; i < n; i++) {
    if (bills[i] === 25) {
      bill25++;
    } else if (bills[i] === 50) {
      if (bill25 > 0) {
        bill25--;
        bill50++;
      } else {
        console.log("NO");
        return;
      }
    } else {
      if (bill50 > 0 && bill25 > 0) {
        bill50--;
        bill25--;
      } else if (bill25 > 2) {
        bill25 -= 3;
      } else {
        console.log("NO");
        return;
      }
    }
  }
  console.log("YES");
});
