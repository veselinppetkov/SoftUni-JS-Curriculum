function solve(input) {
  i = 0;
  let deposit = input[i];
  let sum = 0;

  while (deposit !== "NoMoreMoney") {
    if (Number(deposit) < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    console.log(`Increase: ${Number(deposit).toFixed(2)}`);
    sum += Number(deposit);
    i++;
    deposit = input[i];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
solve(["120", "45.55", "-150"]);
