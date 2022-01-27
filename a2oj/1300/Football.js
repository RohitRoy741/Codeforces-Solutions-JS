let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let scoreboard = new Map();
  for (let i = 0; i < n; i++) {
    lines[i + 1] = lines[i + 1].trim();
    if (scoreboard.has(lines[i + 1])) {
      scoreboard.set(lines[i + 1], scoreboard.get(lines[i + 1]) + 1);
    } else {
      scoreboard.set(lines[i + 1], 1);
    }
  }
  let winner = "";
  let maxGoals = 0;
  for (let team of scoreboard.keys()) {
    if (scoreboard.get(team) > maxGoals) {
      winner = team;
      maxGoals = scoreboard.get(team);
    }
  }
  console.log(winner);
});
