let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [word1, word2, str2] = input
    .trim()
    .split("\n")
    .map((word) => word.trim());
  let str1 = word1 + word2;
  if (str1.length !== str2.length) {
    console.log("NO");
    return;
  }
  let freq1 = new Map();
  for (let ch of str1) {
    if (freq1.get(ch)) {
      freq1.set(ch, freq1.get(ch) + 1);
    } else {
      freq1.set(ch, 1);
    }
  }
  let freq2 = new Map();
  for (let ch of str2) {
    if (freq2.get(ch)) {
      freq2.set(ch, freq2.get(ch) + 1);
    } else {
      freq2.set(ch, 1);
    }
  }
  for (let key of freq1.keys()) {
    if (!freq2.get(key) || freq2.get(key) !== freq1.get(key)) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
});
