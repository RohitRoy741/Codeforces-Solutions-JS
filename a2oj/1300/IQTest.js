let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let matrix = [];
  for (let line of lines) {
    line = line.trim().split("");
    matrix.push(line);
  }
  let n = 4;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        i > 0 &&
        j > 0 &&
        matrix[i - 1][j] === matrix[i][j] &&
        matrix[i][j - 1] === matrix[i][j]
      ) {
        console.log("YES");
        return;
      }
      if (
        i < n - 1 &&
        j > 0 &&
        matrix[i + 1][j] === matrix[i][j] &&
        matrix[i][j - 1] === matrix[i][j]
      ) {
        console.log("YES");
        return;
      }
      if (
        i > 0 &&
        j < n - 1 &&
        matrix[i - 1][j] === matrix[i][j] &&
        matrix[i][j + 1] === matrix[i][j]
      ) {
        console.log("YES");
        return;
      }
      if (
        i < n - 1 &&
        j < n - 1 &&
        matrix[i + 1][j] === matrix[i][j] &&
        matrix[i][j + 1] === matrix[i][j]
      ) {
        console.log("YES");
        return;
      }
    }
  }
  console.log("NO");
});
