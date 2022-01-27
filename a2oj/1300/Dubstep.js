let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let song = input.trim();
  song += "**";
  let result = "";
  let i = 0;
  while (i < song.length) {
    if (song[i] === "*" && song[i + 1] === "*") {
      break;
    } else if (song[i] === "W" && song[i + 1] === "U" && song[i + 2] === "B") {
      result += " ";
      i += 3;
    } else {
      result += song[i];
      i++;
    }
  }
  console.log(result.trim());
});
