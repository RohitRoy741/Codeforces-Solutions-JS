let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function fibonacci(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  }
  let fib = [0, 1];
  let i = 1;
  while (fib[i] < n) {
    fib.push(fib[i] + fib[i - 1]);
    i++;
  }
  fib.pop();
  return fib;
}
process.stdin.on("end", () => {
  let n = parseInt(input.trim());
  let fib = fibonacci(n);
  for (let i = 0; i < fib.length; i++) {
    for (let j = 0; j < fib.length; j++) {
      for (let k = 0; k < fib.length; k++) {
        if (fib[i] + fib[j] + fib[k] === n) {
          console.log(fib[i], fib[j], fib[k]);
          return;
        }
      }
    }
  }
});
