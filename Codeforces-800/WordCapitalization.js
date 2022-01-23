let word = "";
process.stdin.on("data", (chunk) => {
  word += chunk;
});
process.stdin.on("end", () => {
  word = word.trim();
  let result = "";
  result = word[0].toUpperCase() + word.slice(1);
  console.log(result);
});
