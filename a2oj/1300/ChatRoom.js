let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", (chunk) => {
  let word = input.trim();
  let string = "hello";
  let i = 0;
  for (let j = 0; j < word.length && i < 5; j++) {
    if (word[j] === string[i]) {
      i++;
    }
  }
  if (i === 5) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
