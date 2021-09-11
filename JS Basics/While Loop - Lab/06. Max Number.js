function solve(input) {
  let i = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;
  let command = input[i];
  let num = Number(input[i]);

  while (command != "Stop") {
    num = Number(input[i]);
    if (num > maxNum) {
      maxNum = num;
    }
    i++;
    command = input[i];
  }

  console.log(maxNum);
}
solve(["-10", "20", "-30", "Stop"]);
