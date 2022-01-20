input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  lines = input.split("\n");
  let [n, ...words] = lines;
  for (let word of words) {
    word = word.trim();
    if (word.length > 10) {
      let result = word[0];
      result += word.length - 2;
      result += word[word.length - 1];
      console.log(result);
    } else {
      console.log(word);
    }
  }
});
