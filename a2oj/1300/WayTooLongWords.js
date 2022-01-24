let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  for (let i = 0; i < n; i++) {
    let word = lines[i + 1].trim();
    if (word.length > 10) {
      console.log(word[0] + (word.length - 2) + word[word.length - 1]);
    } else {
      console.log(word);
    }
  }
});
