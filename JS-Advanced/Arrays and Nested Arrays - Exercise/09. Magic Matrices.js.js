function magicMatrices(arr) {
  let magicSum = 0;
  let isMagic = true;
  for (let row = 0; row < arr.length; row++) {
    let sumRow = 0;
    let sumColumn = 0;
    for (let column = 0; column < arr.length; column++) {
      sumRow += arr[row][column];
      sumColumn += arr[column][row];
    }
    if (magicSum == 0 && sumRow == sumColumn) {
      magicSum = sumRow;
    }

    if (sumRow !== magicSum) {
      isMagic = false;
    }
  }
  console.log(isMagic);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
