let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let t = parseInt(lines[0]);
  let i = 1;
  while (t--) {
    let n = parseInt(lines[i++]);
    let a = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let b = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let index = a.indexOf(Math.max(...a));
    while (a[index] > b[index]) {
      let temp = a[index];
      a[index] = b[index];
      b[index] = temp;
      index = a.indexOf(Math.max(...a));
    }
    index = b.indexOf(Math.max(...b));
    while (b[index] > a[index]) {
      let temp = a[index];
      a[index] = b[index];
      b[index] = temp;
      index = b.indexOf(Math.max(...b));
    }
    console.log(Math.max(...a) * Math.max(...b));
  }
});
