let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let name = input.trim();
  let distinct = 0;
  for (let i = 0; i < name.length; i++) {
    if (name.indexOf(name[i]) === i) {
      distinct++;
    }
  }
  if (distinct % 2 === 1) {
    console.log("IGNORE HIM!");
  } else {
    console.log("CHAT WITH HER!");
  }
});
