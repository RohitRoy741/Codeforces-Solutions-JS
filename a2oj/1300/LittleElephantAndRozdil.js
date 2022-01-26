let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let cities = lines[1]
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let min = Math.min(...cities);
  let numberOfOccurrences = 0;
  for (let i = 0; i < n; i++) {
    if (cities[i] === min) {
      numberOfOccurrences++;
      if (numberOfOccurrences >= 2) {
        console.log("Still Rozdil");
        return;
      }
    }
  }
  console.log(cities.indexOf(min) + 1);
});
