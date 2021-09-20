function magicMatrices(arr) {
  let isMagic = true;
  for (let row = 0; row < arr.length; row++) {
    let sumRow = 0;
    let sumColumn = 0;
    for (let column = 0; column < arr[row].length; column++) {
      sumRow += arr[row][column];
      sumColumn += arr[column][row];
    }
  }
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
