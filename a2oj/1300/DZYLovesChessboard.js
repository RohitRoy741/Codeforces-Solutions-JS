let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, m] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let chessboard = [];
  for (let i = 0; i < n; i++) {
    chessboard.push(lines[i + 1].trim().split(""));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (chessboard[i][j] === ".") {
        if ((i + j) % 2 === 0) {
          process.stdout.write("B");
        } else {
          process.stdout.write("W");
        }
      } else {
        process.stdout.write(chessboard[i][j]);
      }
    }
    console.log();
  }
});
