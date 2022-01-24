let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [k, l, m, n, d] = input
    .trim()
    .split("\n")
    .map((element) => parseInt(element));
  let unharmedDragons = 0;
  for (let i = 1; i <= d; i++) {
    if (i % k !== 0 && i % l !== 0 && i % m !== 0 && i % n !== 0) {
      unharmedDragons++;
    }
  }
  console.log(d - unharmedDragons);
});
