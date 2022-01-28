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
    let arr = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    arr.reverse();
    let x = 0;
    let count = 0;
    while (x < n) {
      if (arr[x] === arr[0]) {
        x++;
      } else {
        x *= 2;
        count++;
      }
    }
    console.log(count);
  }
});
