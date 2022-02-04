let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0].trim());
  let upper = 0,
    lower = 0,
    flag = false;
  for (let i = 0; i < n; i++) {
    let [a, b] = lines[i + 1]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    upper += a;
    lower += b;
    if ((a + b) % 2 === 1) {
      flag = true;
    }
  }
  if (upper % 2 == 0 && lower % 2 === 0) {
    console.log(0);
  } else if (upper % 2 == 1 && lower % 2 === 1) {
    if (flag) {
      console.log(1);
    } else {
      console.log(-1);
    }
  } else {
    console.log(-1);
  }
});
