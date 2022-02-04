let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let array = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let prefixSum = [0];
  let prev = 0;
  for (let i = 0; i < n; i++) {
    prev += array[i];
    prefixSum.push(prev);
  }
  let sortedArray = array.slice().sort((a, b) => a - b);
  prev = 0;
  let prefixSumSorted = [0];
  for (let i = 0; i < n; i++) {
    prev += sortedArray[i];
    prefixSumSorted.push(prev);
  }
  let m = parseInt(lines[2].trim());
  for (let i = 0; i < m; i++) {
    let [type, l, r] = lines[3 + i]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    if (type === 1) {
      console.log(prefixSum[r] - prefixSum[l - 1]);
    } else {
      console.log(prefixSumSorted[r] - prefixSumSorted[l - 1]);
    }
  }
});
