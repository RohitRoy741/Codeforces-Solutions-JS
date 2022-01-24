let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let [n, k] = lines[0].split(" ").map((element) => parseInt(element));
  let queue = lines[1].split("");
  for (let i = 0; i < k; i++) {
    let j = 0;
    while (j < n - 1) {
      if (queue[j] === "B" && queue[j + 1] === "G") {
        queue[j] = "G";
        queue[j + 1] = "B";
        j += 2;
      } else {
        j++;
      }
    }
  }
  console.log(queue.join(""));
});
