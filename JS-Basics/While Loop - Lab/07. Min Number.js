function solve(input) {
  let i = 0;
  let minNum = Number.MAX_SAFE_INTEGER;
  let command = input[i];
  let num = Number(input[i]);

  while (command != "Stop") {
    num = Number(input[i]);
    if (num < minNum) {
      minNum = num;
    }
    i++;
    command = input[i];
  }

  console.log(minNum);
}
solve(["-10", "20", "-30", "Stop"]);
