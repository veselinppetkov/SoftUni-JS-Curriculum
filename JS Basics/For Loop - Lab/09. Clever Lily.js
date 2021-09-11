function solve (input) {

  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let toysAmount = 0;
  let moneyAmount = 0;
  let moneySaved = 0;
  let moneyLeft = 0;

  for (i=1; i<=age; i++) {
    if (i % 2 == 0) {
      moneyAmount+=5*i;
      moneyAmount--;
    } else {
      toysAmount++;
    }
  }

    moneySaved = moneyAmount+(toysAmount*toyPrice);

    if (moneySaved >= washerPrice) {
      moneyLeft = (moneySaved-washerPrice).toFixed(2);
      console.log(`Yes! ${moneyLeft}`)
    } else {
      moneyNeeded = (washerPrice-moneySaved).toFixed(2);
      console.log(`No! ${moneyNeeded}`)
    }
  }

solve(["21", "1570.98", "3"]);
solve(["10", "170", "6"])
