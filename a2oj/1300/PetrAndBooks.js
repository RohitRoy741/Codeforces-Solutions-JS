let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let week = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let sum = week.reduce((acc, day) => (acc += day), 0);
  if (sum <= n) {
    n = n - (Math.floor(n / sum) - 1) * sum;
  }
  let day = 0;
  while (n > 0) {
    n = n - week[day];
    if (n <= 0) {
      break;
    }
    day = (day + 1) % 7;
  }
  console.log(day + 1);
});
