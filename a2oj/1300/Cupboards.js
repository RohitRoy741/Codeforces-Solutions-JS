let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let openLeft = 0,
    closeLeft = 0,
    openRight = 0,
    closeRight = 0;
  for (let i = 0; i < n; i++) {
    let [left, right] = lines[i + 1]
      .split(" ")
      .map((element) => parseInt(element));
    if (left === 1) {
      openLeft++;
    } else {
      closeLeft++;
    }
    if (right === 1) {
      openRight++;
    } else {
      closeRight++;
    }
  }
  let minLeft = openLeft < closeLeft ? openLeft : closeLeft;
  let minRight = openRight < closeRight ? openRight : closeRight;
  console.log(minLeft + minRight);
});
