let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let players = input.trim();
  for (let i = 0; i < players.length - 6; i++) {
    if (
      players.slice(i, i + 7) === "0000000" ||
      players.slice(i, i + 7) === "1111111"
    ) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
});
