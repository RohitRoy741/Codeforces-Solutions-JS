let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", (chunk) => {
  let lines = input.trim().split("\n");
  let t = parseInt(lines[0]);
  let i = 1;
  while (t--) {
    let [n, k] = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let a = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let b = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let software = [];
    for (let j = 0; j < n; j++) {
      software.push([a[j], b[j]]);
    }
    software.sort((a, b) => a[0] - b[0]);
    for (let j = 0; j < n; j++) {
      if (software[j][0] <= k) {
        k += software[j][1];
      }
    }
    console.log(k);
  }
});
