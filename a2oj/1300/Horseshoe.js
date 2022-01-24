let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let arr = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let duplicates = 0;
  for (let i = 0; i < 4; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      duplicates++;
    }
  }
  console.log(duplicates);
});
