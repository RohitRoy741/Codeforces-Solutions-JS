let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let segments = [];
  for (let i = 0; i < n; i++) {
    let [l, r] = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    segments.push([l, r]);
  }
  let segment = [1000000001, 0];
  let index = 0;
  let maxRight = 0;
  for (let i = 0; i < n; i++) {
    if (segments[i][0] < segment[0]) {
      segment = segments[i];
      index = i;
    } else if (segments[i][0] === segment[0] && segments[i][1] > segment[1]) {
      segment = segments[i];
      index = i;
    }
    if (segments[i][1] > maxRight) {
      maxRight = segments[i][1];
    }
  }
  if (segment[1] === maxRight) {
    console.log(index + 1);
  } else {
    console.log(-1);
  }
});
