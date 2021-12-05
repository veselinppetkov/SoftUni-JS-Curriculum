function numbersByNine(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let sum = 0;
  let outputNumbers = "";

  for (i = firstNum; i < secondNum; i++) {
    if (i % 9 == 0) {
      sum += i;
      outputNumbers += i + "\n" + "";
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(outputNumbers);
}
numbersByNine(["100", "200"]);
