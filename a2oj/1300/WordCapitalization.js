let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let word = input.trim();
  word = word[0].toUpperCase() + word.slice(1);
  console.log(word);
});
