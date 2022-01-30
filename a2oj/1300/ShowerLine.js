let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});
function subsetGenerator(arr, n, subsets, subset) {
  if (n === arr.length) {
    subsets.push(subset.slice());
  } else {
    subsetGenerator(arr, n + 1, subsets, subset);
    subset.push(arr[n]);
    subsetGenerator(arr, n + 1, subsets, subset);
    subset.pop();
  }
}
function permutationGenerator(arr, n, permutation, permutations) {
  if (permutation.length === arr.length) {
    permutations.push(permutation.slice());
  } else {
    for (let i = n; i < arr.length; i++) {
      let temp = arr[n];
      arr[n] = arr[i];
      arr[i] = temp;
      permutation.push(arr[n]);
      permutationGenerator(arr, n + 1, permutation, permutations);
      temp = arr[n];
      arr[n] = arr[i];
      arr[i] = temp;
      permutation.pop();
    }
  }
}
function happinessValue(arrangement, happiness) {
  let i = 0;
  let value = 0;
  while (i < 5) {
    for (let j = i; j < 4; j += 2) {
      value +=
        happiness[arrangement[j] - 1][arrangement[j + 1] - 1] +
        happiness[arrangement[j + 1] - 1][arrangement[j] - 1];
    }
    i++;
  }
  return value;
}
process.stdin.on("end", () => {
  let lines = input.trim().split("\n");
  let happiness = [];
  for (let i = 0; i < 5; i++) {
    let row = lines[i]
      .trim()
      .split(" ")
      .map((element) => parseInt(element));
    happiness.push(row);
  }
  let permutations = [];
  let permutation = [];
  let arr = [1, 2, 3, 4, 5];
  // let subset = [];
  // let subsets = [];
  // subsetGenerator(arr, 0, subsets, subset);
  // console.log(subsets);
  permutationGenerator(arr, 0, permutation, permutations);
  let max = 0;
  let maxPerm = [];
  for (let arrangement of permutations) {
    let value = happinessValue(arrangement, happiness);
    if (max < value) {
      max = value;
      maxPerm = arrangement;
    }
  }
  console.log(max);
});
