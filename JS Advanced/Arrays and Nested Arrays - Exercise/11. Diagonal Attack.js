function diagonalAttack(arr) {
  let matrix = [];
  let resultMatrix = [];
  let fMainDiagonal = 0;
  let sMainDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    matrix.push(arr[i].split(" ").map(Number));
    resultMatrix.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    fMainDiagonal += matrix[i][i];
    sMainDiagonal += matrix[i][matrix.length - 1 - i];
    resultMatrix[i][i] = matrix[i][i];
    resultMatrix[i][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - i];
  }

  if (fMainDiagonal == sMainDiagonal) {
    for (let row = 0; row < resultMatrix.length; row++) {
      for (let column = 0; column < resultMatrix.length; column++) {
        if (resultMatrix[row][column] == undefined) {
          resultMatrix[row][column] = sMainDiagonal;
        }
      }
    }
    for (let i = 0; i < resultMatrix.length; i++) {
      console.log(resultMatrix[i].join(" "));
    }
  } else {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join(" "));
    }
  }
}
// diagonalAttack([
//   "5 3 12 3 1",
//   "11 4 23 2 5",
//   "101 12 3 21 10",
//   "1 4 5 2 2",
//   "5 22 33 11 1",
// ]);
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
