let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, k] = lines[0]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let heights = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let sum = heights.slice(0, k).reduce((acc, element) => (acc += element), 0);
  let index = 1;
  let curr = sum;
  for (let i = 1; i + k - 1 < n; i++) {
    curr = curr - heights[i - 1] + heights[i + k - 1];
    //console.log(sum, temp, heights[i - 1], heights[i + k - 1]);
    if (curr < sum) {
      sum = curr;
      index = i + 1;
    }
  }
  console.log(index);
});
