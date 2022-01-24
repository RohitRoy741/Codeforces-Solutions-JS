let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, k, l, c, d, p, nl, np] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  console.log(
    Math.floor(
      Math.min(
        Math.floor((k * l) / nl),
        Math.floor(c * d),
        Math.floor(p / np)
      ) / n
    )
  );
});
