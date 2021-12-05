function printNSum(num1, num2) {
  let print = "";
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    print += `${i} `;
    sum += i;
  }
  console.log(print);
  console.log(`Sum: ${sum}`);
}
printNSum(0, 26);
