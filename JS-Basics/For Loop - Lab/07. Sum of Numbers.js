function sumOfNums(input) {
  let numsString = input[0];
  let sum = 0;

  for (let i = 0; i < numsString.length; i++) {
    sum += Number(numsString[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNums(["1234"]);
