function sortingNumbers(input) {
  let newArr = [];
  let sorted = input.sort((a, b) => a - b);
  while (sorted.length > 0) {
    newArr.push(sorted.shift());
    if (sorted.length == 0) {
      break;
    } else {
      newArr.push(sorted.pop());
    }
  }
  return newArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
