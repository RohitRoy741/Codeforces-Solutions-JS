let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let word = input.trim();
  let freq = new Map();
  for (let letter of word) {
    if (!freq.has(letter)) {
      freq.set(letter, 1);
    } else {
      freq.set(letter, freq.get(letter) + 1);
    }
  }
  let countOdd = 0;
  for (let value of freq.values()) {
    if (value % 2 == 1) {
      countOdd++;
    }
  }
  if (countOdd === 0 || countOdd === 1 || countOdd % 2 === 1) {
    console.log("First");
  } else if (countOdd % 2 === 0) {
    console.log("Second");
  }
});
