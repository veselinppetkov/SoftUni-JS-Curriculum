function sumPrimeNonPrime(input) {
  let i = 0;
  let line = input[i];

  let primeNum = 0;
  let nonPrimeNum = 0;

  while (line != "stop") {
    let num = Number(input[i]);
    if (num < 0) {
      console.log(`Number is negative.`);
    } else {
      let isPrime = true;
      for (let j = 2; j < num; j++) {
        if (num % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNum += num;
      } else {
        nonPrimeNum += num;
      }
    }
    line = input[++i];
  }
  console.log(`Sum of all prime numbers is: ${primeNum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
console.log('---------------------------------------------')
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
console.log('---------------------------------------------')
sumPrimeNonPrime(["0", "-9", "0", "stop"]);
