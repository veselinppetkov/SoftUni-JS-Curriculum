function GCD(num1, num2) {
  let greatestCD = 0;
  for (let i = 0; i < num1; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      greatestCD = Number(i);
    }
  }
  console.log(greatestCD);
}
GCD(15, 5);
GCD(2154, 458);
