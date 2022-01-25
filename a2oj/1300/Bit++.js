let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let x = 0;
  for (let i = 0; i < n; i++) {
    let instruction = lines[i + 1].trim();
    if (instruction[1] === "+") {
      x++;
    } else if (instruction[1] === "-") {
      x--;
    }
  }
  console.log(x);
});
