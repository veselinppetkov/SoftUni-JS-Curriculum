function subtraction(array) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      sumEven += Number(array[i]);
    } else if (Number(array[i]) % 2 != 0) {
      sumOdd += Number(array[i]);
    }
  }

  console.log(sumEven - sumOdd);
}

subtraction(["1", "2", "3", "4", "5", "6"]);
subtraction(["3", "5", "7", "9"]);
subtraction(["2", "4", "6", "8", "10"]);
