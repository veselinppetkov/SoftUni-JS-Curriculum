function magicMatrices(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sumROne = arr[i].reduce((a, b) => a + b, 0);
    let sumRTwo = arr[i + 1].reduce((a, b) => a + b, 0);
    let sumCOne = 0;
    let sumCTwo = 0;

    for (let j = 0; j < arr.length; j++) {
      sumCOne += arr[i][j];
      sumCTwo += arr[i + 1][j];
    }

    if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
      return false;
    }
  }

  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
