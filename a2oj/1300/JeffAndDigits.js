let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let numbers = lines[1].split(" ").map((element) => parseInt(element));
  let zeroes = 0,
    fives = 0;
  for (let i = 0; i < n; i++) {
    if (numbers[i] === 0) {
      zeroes++;
    } else {
      fives++;
    }
  }
  if (zeroes === 0) {
    console.log(-1);
  } else {
    let result = "0";
    let tempNum = 5;
    let temp = "5";
    fives--;
    while (fives > 0) {
      tempNum = tempNum + 5;
      temp += "5";
      if (tempNum % 9 == 0) {
        result = temp;
      }
      fives--;
    }
    while (zeroes > 0 && result[0] !== "0") {
      result += "0";
      zeroes--;
    }
    console.log(result);
  }
});
