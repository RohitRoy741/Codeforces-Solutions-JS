let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let flowers = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  flowers.sort((a, b) => a - b);
  let difference = flowers[n - 1] - flowers[0];
  let countMin = 0,
    countMax = 0;
  for (let i = 0; i < n && flowers[i] === flowers[0]; i++) {
    countMin++;
  }
  for (let j = n - 1; j >= 0 && flowers[j] === flowers[n - 1]; j--) {
    countMax++;
  }
  if (flowers[0] === flowers[n - 1]) {
    countMin = Math.ceil(countMin / 2);
    countMax = Math.floor(countMax / 2);
  }
  console.log(difference, countMax * countMin);
});
