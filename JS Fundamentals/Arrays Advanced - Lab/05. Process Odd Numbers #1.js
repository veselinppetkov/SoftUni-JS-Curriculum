function processOddNums(arr) {
  let result = arr
    .filter((x, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse();

  return result.join(" ");
}

console.log(processOddNums([10, 15, 20, 25]));
