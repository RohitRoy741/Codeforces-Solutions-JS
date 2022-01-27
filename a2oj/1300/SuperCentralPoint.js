let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let points = [];
  for (let i = 0; i < n; i++) {
    let point = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    points.push(point);
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    let right = 0,
      left = 0,
      lower = 0,
      upper = 0;
    for (let j = 0; j < n; j++) {
      if (points[i][0] === points[j][0]) {
        if (points[i][1] > points[j][1]) {
          lower++;
        } else if (points[i][1] < points[j][1]) {
          upper++;
        }
      } else if (points[i][1] === points[j][1]) {
        if (points[i][0] > points[j][0]) {
          left++;
        } else if (points[i][0] < points[j][0]) {
          right++;
        }
      }
    }
    if (left * right * upper * lower > 0) {
      result++;
    }
  }
  console.log(result);
});
