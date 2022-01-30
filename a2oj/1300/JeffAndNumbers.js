let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let a = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let results = {};
  for (let i = 0; i < n; i++) {
    if (!results[a[i]]) {
      results[a[i]] = [0, i];
    } else if (results[a[i]][0] < 0) {
      continue;
    } else if (results[a[i]][0] === 0) {
      results[a[i]] = [i - results[a[i]][1], i];
    } else if (results[a[i]][0] === i - results[a[i]][1]) {
      results[a[i]] = [results[a[i]][0], i];
    } else {
      results[a[i]] = [-1, i];
    }
  }
  let count = 0;
  let answer = "";
  for (let key in results) {
    if (results[key][0] >= 0) {
      count++;
      answer += `${key} ${results[key][0]}\n`;
    }
  }
  console.log(count);
  console.log(answer.trim());
});
