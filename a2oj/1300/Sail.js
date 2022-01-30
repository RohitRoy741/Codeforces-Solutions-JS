let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [t, sx, sy, ex, ey] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let string = lines[1].trim();
  let x = sx > ex ? "W" : "E";
  let y = sy > ey ? "S" : "N";
  let distX = Math.abs(sx - ex);
  let distY = Math.abs(sy - ey);
  let i;
  for (i = 0; i < t; i++) {
    if (distX === 0 && distY === 0) {
      break;
    }
    if (string[i] === x && distX > 0) {
      distX--;
    } else if (string[i] === y && distY > 0) {
      distY--;
    }
  }
  if (distX !== 0 || distY !== 0) {
    console.log(-1);
  } else {
    console.log(i);
  }
});
