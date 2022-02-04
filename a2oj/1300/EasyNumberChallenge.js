let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function d(n) {
  let count = 0;
  for(let i=1; i*i<=n; i++) {
    if(n%i===0) {
      if(n/i === i) {
        count++;
      } else {
        count+=2;
      }
    }
  }
  return count;
}
process.stdin.on("end", () => {
  let [a, b, c] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  let divisorsCount = new Map();
  let m = 1073741824;
  let result = 0;
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      for (let k = 1; k <= c; k++) {
        let mul = i*j*k;
        if(divisorsCount.has(mul)) {
          result += (divisorsCount.get(mul) % m);
        } else {
          let value = d(mul);
          divisorsCount.set(mul, value);
          result += (value % m);
        }
      }
    }
  }
  console.log(result % m);
});
