let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let number = input.trim();
  number = number.concat("00");
  let i = 0;
  while (true) {
    if (number[i] === "1") {
      i++;
      if (number[i] === "4") {
        i++;
        if (number[i] === "4") {
          i++;
        }
      }
    } else {
      break;
    }
  }
  if (number.slice(i) === "00") {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
