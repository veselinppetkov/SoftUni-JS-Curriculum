function solve(input) {
  let num = Number(input[0]);
  let currentNum = 1;

  while (num >= currentNum) {
    console.log(currentNum);
    currentNum = currentNum * 2 + 1;
  }
}
solve(["17"]);
