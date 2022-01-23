let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  input = parseInt(input);
  if (input > 2 && input % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
