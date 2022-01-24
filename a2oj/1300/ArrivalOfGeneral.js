let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let arr = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let maxIndex = 0,
    minIndex = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
    if (arr[i] <= arr[minIndex]) {
      minIndex = i;
    }
  }
  if (maxIndex > minIndex) {
    minIndex++;
  }
  console.log(maxIndex + (n - minIndex - 1));
});
