let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
  input = input.trim();
});
process.stdin.on("end", () => {
  let result = "";
  let i = 0;
  while (i < input.length) {
    if (input[i] == ".") {
      result += "0";
      i++;
    } else if (input[i] == "-" && input[i + 1] == "-") {
      result += "2";
      i += 2;
    } else if (input[i] == "-" && input[i + 1] == ".") {
      result += "1";
      i += 2;
    }
  }
  console.log(result);
});
