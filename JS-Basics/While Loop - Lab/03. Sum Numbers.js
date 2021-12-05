function solve(input) {
  let num = Number(input[0]);
  let i = 1;
  let nums = Number(input[i]);
  let sum = 0;

  while (num > sum) {
    nums = Number(input[i]);
    sum += nums;
    i++;
  }
  console.log(sum);
}
solve(["100", "10", "20", "30", "40"]);
solve(["20", "1", "2", "3", "4", "5", "6"]);
