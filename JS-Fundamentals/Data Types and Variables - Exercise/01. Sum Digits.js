function sumDigits(num) {
  let numAsString = num.toString();
  let sum = 0;

  for (let digit of numAsString) {
    sum += Number(digit);
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
