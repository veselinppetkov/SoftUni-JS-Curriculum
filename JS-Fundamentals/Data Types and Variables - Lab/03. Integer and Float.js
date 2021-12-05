function integerOrFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;

  console.log(sum % 1 == 0 ? `${sum} - Integer` : `${sum} - Float`);
}
integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);
