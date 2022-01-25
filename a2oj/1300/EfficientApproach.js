let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function binarySearch(arr, element, begin, end) {
  if (begin > end) {
    return false;
  }
  let mid = Math.floor((begin + end) / 2);
  if (arr[mid][0] === element) {
    return arr[mid][1];
  } else if (arr[mid][0] < element) {
    return binarySearch(arr, element, mid + 1, end);
  } else {
    return binarySearch(arr, element, begin, mid - 1);
  }
}
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let n = parseInt(lines[0]);
  let arr = lines[1]
    .trim()
    .split(" ")
    .map((element, index) => [parseInt(element), index]);
  arr.sort((a, b) => a[0] - b[0]);
  let m = parseInt(lines[2]);
  let queries = lines[3]
    .trim()
    .split(" ")
    .map((query) => parseInt(query));
  let vasya = 0,
    petya = 0;
  for (let query of queries) {
    let index = binarySearch(arr, query, 0, n - 1);
    vasya += index + 1;
    petya += n - index;
  }
  console.log(vasya, petya);
});
