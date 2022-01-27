let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let k = parseInt(lines[0]);
  let string = lines[1].trim();
  let result = Array(k).fill("");
  let freq = new Map();
  for (let ch of string) {
    if (freq.has(ch)) {
      freq.set(ch, freq.get(ch) + 1);
    } else {
      freq.set(ch, 1);
    }
  }
  for (let key of freq.keys()) {
    if (freq.get(key) % k !== 0) {
      console.log(-1);
      return;
    } else {
      let numOfChars = freq.get(key);
      let i = 0;
      while (numOfChars--) {
        result[i] = result[i] + key;
        i = (i + 1) % k;
      }
    }
  }
  console.log(result.join(""));
});
