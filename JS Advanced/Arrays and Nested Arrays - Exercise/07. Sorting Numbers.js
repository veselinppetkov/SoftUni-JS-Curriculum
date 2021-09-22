function sortingNumbers(input) {
  let resultArr = [];
  let sorted = input.sort((a, b) => a - b);
  while (sorted.length > 0) {
    resultArr.push(sorted.shift());
    if (sorted.length !== 0) {
      resultArr.push(sorted.pop());
    }
  }
  return resultArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
