let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  lines = input.trim().split("\n");
  let matrix = [];
  for (let line of lines) {
    let row = line.split(" ").map((element) => parseInt(element));
    matrix.push(row);
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === 1) {
        console.log(Math.abs(2 - i) + Math.abs(2 - j));
        return;
      }
    }
  }
});
