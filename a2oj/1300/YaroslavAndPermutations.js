let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  if (n === 1) {
    console.log("YES");
    return;
  }
  let arr = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let freq = new Map();
  let c = 0;
  for (let num of arr) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }
  for (let count of freq.values()) {
    if (count > c) {
      c = count;
    }
  }
  if (n - c + 1 >= c) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
