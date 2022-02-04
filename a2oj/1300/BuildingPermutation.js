let input = '';
process.stdin.on('data', (chunk) => {
  input += chunk;
});
process.stdin.on('end', () => {
  let lines = input.trim().split('\n')
  let n = parseInt(lines[0].trim());
  let a = lines[1].trim().split(' ').map(element => parseInt(element));
  a.sort((a, b) => a - b);
  let sum = 0;
  for(let i=0;i<n;i++) {
    sum += Math.abs(a[i] - (i+1));
  }
  console.log(sum);
})