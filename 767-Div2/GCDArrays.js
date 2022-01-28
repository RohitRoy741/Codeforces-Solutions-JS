let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function gcd(a, b) {
  let greater = a > b ? a : b;
  let smaller = a < b ? a : b;
  while (greater % smaller !== 0) {
    let x = greater;
    let y = smaller;
    x = smaller;
    y = greater % smaller;
    greater = x;
    smaller = y;
  }
  return smaller;
}
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let t = parseInt(lines[0]);
  let i = 1;
  while (t--) {
    let [l, r, k] = lines[i++]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    let a = [];
    for (let j = l; j <= r; j++) {
      a.push(j);
    }
    let flag = true;
    for (let p = 0; p < a.length && flag; p++) {
      for (let q = 0; q < a.length; q++) {
        if (gcd(a[p], a[q]) === 1) {
          if (k <= 0) {
            flag = false;
            break;
          }
          let x = a[p];
          let y = a[q];
          a[p] = x * y;
          a.splice(q, 1);
          k--;
        }
      }
    }
    let result = true;
    for (let p = 0; p < a.length && result; p++) {
      for (let q = 0; q < a.length; q++) {
        if (gcd(a[q], a[p]) === 1) {
          result = false;
          break;
        }
      }
    }
    if (result) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});
