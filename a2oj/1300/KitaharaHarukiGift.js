let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let arr = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let countHundred = 0,
    countTwoHundred = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 100) {
      countHundred++;
    } else if (arr[i] === 200) {
      countTwoHundred++;
    }
  }
  //console.log(countHundred, countTwoHundred);
  if (countHundred % 2 === 1) {
    console.log("NO");
    return;
  }
  if (countTwoHundred % 2 == 0 || countHundred >= 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
