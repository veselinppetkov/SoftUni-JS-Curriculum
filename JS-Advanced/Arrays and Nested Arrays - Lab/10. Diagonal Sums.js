function diagonalSums(arr) {
  let firstSum = 0;
  let secondSum = 0;
  let length = arr.length - 1;

  for (let i = 0; i <= length; i++) {
    firstSum += arr[i][i];
  }
  for (let i = 0; i <= length; i++) {
    secondSum += arr[i][length - i];
  }
  console.log(firstSum, secondSum);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
