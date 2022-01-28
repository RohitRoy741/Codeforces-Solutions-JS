let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function isVowel(ch) {
  let result = "false";
  switch (ch) {
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "y":
    case "Y":
    case "u":
    case "U":
      result = true;
      break;
    default:
      result = false;
  }
  return result;
}
process.stdin.on("end", () => {
  let string = input.trim();
  let result = "";
  for (let ch of string) {
    if (!isVowel(ch)) {
      result = result + "." + ch.toLowerCase();
    }
  }
  console.log(result);
});
