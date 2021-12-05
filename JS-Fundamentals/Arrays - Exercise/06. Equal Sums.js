function equalSums(array) {
  let isTrue = false;

  for (let i = 0; i < array.length; i++) {
    let rightSum = 0;
    let leftSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += array[j];
    }

    for (let k = i + 1; k < array.length; k++) {
      rightSum += array[k];
    }

    if (rightSum == leftSum) {
      console.log(i);
      isTrue = true;
      break;
    }
  }

  if (!isTrue) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
