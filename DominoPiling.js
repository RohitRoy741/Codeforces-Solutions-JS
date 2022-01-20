let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", (chunk) => {
  let [m, n] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  console.log(Math.floor((m * n) / 2));
});
