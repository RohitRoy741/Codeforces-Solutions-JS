let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [g1, g2] = input
    .trim()
    .split("\n")
    .map((genome) => genome.trim());
  if (g1.length !== g2.length) {
    console.log("NO");
    return;
  }
  let freq1 = new Map();
  let freq2 = new Map();
  for (let char of g1) {
    if (!freq1.has(char)) {
      freq1.set(char, 1);
    } else {
      freq1.set(char, freq1.get(char) + 1);
    }
  }
  for (let char of g2) {
    if (!freq2.has(char)) {
      freq2.set(char, 1);
    } else {
      freq2.set(char, freq2.get(char) + 1);
    }
  }
  //console.log(freq1, freq2);
  for (let key of freq1.keys()) {
    //console.log(key, freq2.has(key), freq1.get(key), freq2.get(key));
    if (!freq2.has(key) || freq1.get(key) !== freq2.get(key)) {
      console.log("NO");
      return;
    }
  }
  let diff = 0;
  for (let i = 0; i < g1.length; i++) {
    if (g1[i] !== g2[i]) {
      diff++;
    }
  }
  if (diff === 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
