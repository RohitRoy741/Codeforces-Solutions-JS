let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [string1, string2] = input.trim().split("\n");
  string1 = string1.trim().toLowerCase();
  string2 = string2.trim().toLowerCase();
  if (string1 === string2) {
    console.log(0);
  } else if (string1 < string2) {
    console.log(-1);
  } else {
    console.log(1);
  }
});
