let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let num = lines[1].trim();
  let a = num
    .slice(0, n)
    .split("")
    .map((element) => parseInt(element))
    .sort((a, b) => a - b);
  let b = num
    .slice(n)
    .split("")
    .map((element) => parseInt(element))
    .sort((a, b) => a - b);
  let flag = true;
  if (a[0] > b[0]) {
    for (let i = 1; i < num.length / 2; i++) {
      if (a[i] <= b[i]) {
        flag = false;
        break;
      }
    }
  } else if (a[0] < b[0]) {
    for (let i = 0; i < num.length / 2; i++) {
      if (a[i] >= b[i]) {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
