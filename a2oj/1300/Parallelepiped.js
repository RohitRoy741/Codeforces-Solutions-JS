let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [s1, s2, s3] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let a, b, c;
  a = Math.sqrt((s1 * s3) / s2);
  b = Math.sqrt((s1 * s2) / s3);
  c = Math.sqrt((s2 * s3) / s1);
  console.log(4 * (a + b + c));
});
