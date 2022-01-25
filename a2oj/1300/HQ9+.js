let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  input = input.trim();
  if (input.includes("H") || input.includes("Q") || input.includes("9")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
