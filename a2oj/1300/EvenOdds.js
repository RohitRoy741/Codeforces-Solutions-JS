let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, k] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  if (k <= Math.ceil(n / 2)) {
    console.log(2 * k - 1);
  } else {
    console.log(2 * (k - Math.ceil(n / 2)));
  }
});
