let input;
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  input = input.trim();
  lines = input.split("\n");
  let [n, k] = lines[0].split(" ").map((element) => parseInt(element));
  let arr = lines[1].split(" ").map((element) => parseInt(element));
  arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0 || arr[i] < arr[k - 1]) {
      break;
    }
    result++;
  }
  console.log(result);
});
