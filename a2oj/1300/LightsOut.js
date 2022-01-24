let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let matrix = [[0, 0, 0, 0, 0]];
  for (let line of lines) {
    let row = line.split(" ").map((element) => parseInt(element));
    row.unshift(0);
    row.push(0);
    matrix.push(row);
  }
  matrix.push([0, 0, 0, 0, 0]);
  let lights = [[0, 0, 0, 0, 0]];
  for (let i = 1; i <= 3; i++) {
    let row = [0];
    for (let j = 1; j <= 3; j++) {
      row.push(matrix[i][j]);
    }
    row.push(0);
    lights.push(row);
  }
  lights.push([0, 0, 0, 0, 0]);
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (matrix[i][j] != 0) {
        lights[i - 1][j] += matrix[i][j];
        lights[i][j - 1] += matrix[i][j];
        lights[i + 1][j] += matrix[i][j];
        lights[i][j + 1] += matrix[i][j];
      }
    }
  }
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      process.stdout.write(((lights[i][j] + 1) % 2) + "");
    }
    console.log();
  }
});
