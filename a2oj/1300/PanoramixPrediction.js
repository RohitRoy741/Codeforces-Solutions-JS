function nextPrime(n) {
  n++;
  while (!isPrime(n)) {
    n++;
  }
  return n;
}
function isPrime(m) {
  if (m === 1) {
    return false;
  }
  for (let i = 2; i * i <= m; i++) {
    if (m % i === 0) {
      return false;
    }
  }
  return true;
}
let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let [n, m] = input
    .trim()
    .split(" ")
    .map((element) => parseInt(element));
  if (m === nextPrime(n)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
