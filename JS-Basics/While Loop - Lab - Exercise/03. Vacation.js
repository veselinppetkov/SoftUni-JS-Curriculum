function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let moneyAvailable = Number(input[1]);
  let i = 2;
  let action = input[i++];
  let moneyAct = Number(input[i]);
  let daysCount = 0;
  let spendDays = 0;

  while (true) {
    if (action === "spend") {
      daysCount++;
      spendDays++;

      if (moneyAct > moneyAvailable) {
        moneyAvailable = 0;
      } else {
        moneyAvailable -= moneyAct;
      }
    } else if (action === "save") {
      daysCount++;
      moneyAvailable += moneyAct;
      spendDays = 0;
    }

    i++;
    action = input[i++];
    moneyAct = Number(input[i]);

    if (moneyAvailable >= moneyNeeded) {
      console.log(`You saved the money for ${daysCount} days.`);
      break;
    }

    if (spendDays == 5) {
      console.log(`You can't save the money.`);
      console.log(`${daysCount}`);
      return;
    }
  }
}

vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
// vacation([
//   "110",
//   "60",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
//   "spend",
//   "10",
// ]);
// // vacation(["2000", "1000", "spend", "1200", "spend", "2000","spend", "2000","spend", "2000","spend", "2000"]);
