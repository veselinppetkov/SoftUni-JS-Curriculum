function sumEvenNumbers(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      sum += Number(array[i]);
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
