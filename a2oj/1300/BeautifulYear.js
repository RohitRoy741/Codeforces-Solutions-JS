let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function isBeautiful(year) {
  for (let i = 0; i < year.length; i++) {
    if (year.indexOf(year[i]) !== i) {
      return false;
    }
  }
  return true;
}
process.stdin.on("end", () => {
  let year = parseInt(input);
  year++;
  while (!isBeautiful("" + year)) {
    year++;
  }
  console.log(year);
});
