function sum(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);
  let combination = 0;

  for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
      combination++;
      if (a + b == magicNum) {
        console.log(`Combination N:${combination} (${a} + ${b} = ${a + b})`);
        return;
      }
    }
  }
  console.log(`${combination} combinations - neither equals ${magicNum}`);
}
sum(["1", "10", "5"]);
