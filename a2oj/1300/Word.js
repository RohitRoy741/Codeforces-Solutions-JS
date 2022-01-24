let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let word = input.trim();
  let u = 0,
    l = 0;
  for (let ch of word) {
    if (ch >= "A" && ch <= "Z") {
      u++;
    } else if (ch >= "a" && ch <= "z") {
      l++;
    }
  }
  if (u > l) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
});
