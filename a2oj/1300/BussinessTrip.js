let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let k = parseInt(lines[0]);
  let months = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element))
    .sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < 12; i++) {
    if (k <= 0) {
      break;
    }
    k = k - months[i];
    count++;
  }
  if (k > 0) {
    console.log(-1);
  } else {
    console.log(count);
  }
});
