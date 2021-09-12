function oddNEvenSum(num) {
  let numAsString = String(num);
  let evenSum = 0;
  let oddSum = 0;

  for (let digit of numAsString) {
    if (digit % 2 === 0) {
      evenSum += Number(digit);
    } else {
      oddSum += Number(digit);
    }
  }
  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddNEvenSum(1000435));
