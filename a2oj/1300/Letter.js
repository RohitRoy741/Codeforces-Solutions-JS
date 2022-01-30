let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [heading, word] = input
    .trim()
    .split("\n")
    .map((string) => string.trim());
  let freq1 = new Map();
  let freq2 = new Map();
  for (let char of heading) {
    if (char === " ") {
      continue;
    }
    if (!freq1.has(char)) {
      freq1.set(char, 1);
    } else {
      freq1.set(char, freq1.get(char) + 1);
    }
  }
  for (let char of word) {
    if (char === " ") {
      continue;
    }
    if (!freq2.has(char)) {
      freq2.set(char, 1);
    } else {
      freq2.set(char, freq2.get(char) + 1);
    }
  }
  for (let key of freq2.keys()) {
    if (!freq1.has(key) || freq1.get(key) < freq2.get(key)) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
});
