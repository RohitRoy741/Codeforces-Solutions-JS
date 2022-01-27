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
  let tasks = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let current = 1;
  let count = 0;
  for (let task of tasks) {
    let moves = task - current;
    if (moves < 0) {
      moves += n;
    }
    count += moves;
    current = task;
  }
  console.log(count);
});
