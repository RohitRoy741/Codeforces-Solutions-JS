let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, m] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let correct = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let incorrect = lines[2]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  correct.sort((a, b) => a - b);
  incorrect.sort((a, b) => a - b);
  //console.log(correct, incorrect);
  let tl = Math.max(2 * correct[0], correct[n - 1]);
  //console.log(tl);
  if (tl >= incorrect[0]) {
    console.log(-1);
  } else {
    console.log(tl);
  }
});
