let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [str1, str2] = input
    .trim()
    .split("\n")
    .map((str) => str.trim().toLowerCase());
  if (str1 === str2) {
    console.log(0);
  } else if (str1 > str2) {
    console.log(1);
  } else {
    console.log(-1);
  }
});
