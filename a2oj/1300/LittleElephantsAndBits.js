let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let binary = input.trim();
  for (let i = 0; i < binary.length - 1; i++) {
    if (binary[i] === "1" && binary[i + 1] === "0") {
      console.log(binary.slice(0, i + 1) + binary.slice(i + 2));
      return;
    }
  }
  console.log(binary.slice(1));
});
