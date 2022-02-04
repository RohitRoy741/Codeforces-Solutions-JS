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
  let teams = [];
  for (let i = 0; i < n; i++) {
    let [problems, time] = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    teams.push([problems, time]);
  }
  teams.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  let i = k - 1;
  let count = 0;
  while (i >= 0) {
    if (teams[i][0] === teams[k - 1][0] && teams[i][1] === teams[k - 1][1]) {
      count++;
      i--;
    } else {
      break;
    }
  }
  i = k;
  while (i < n) {
    if (teams[i][0] === teams[k - 1][0] && teams[i][1] === teams[k - 1][1]) {
      count++;
      i++;
    } else {
      break;
    }
  }
  console.log(count);
});
