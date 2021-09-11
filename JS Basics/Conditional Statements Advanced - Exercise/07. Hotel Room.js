function hotel(input) {
  let month = input[0];
  let sleepingDays = Number(input[1]);
  let totalSumA = 0;
  let totalSumS = 0;

  switch (month) {
    case "May":
    case "October":
      if (sleepingDays <= 7) {
        totalSumA = sleepingDays * 65;
        totalSumS = sleepingDays * 50;
        console.log(`Apartment: ${totalSumA.toFixed(2)} lv.`);
        console.log(`Studio: ${totalSumS.toFixed(2)} lv.`);
      } else if (sleepingDays > 7 && sleepingDays < 14) {
        totalSumA = sleepingDays * 65;
        totalSumS = sleepingDays * 50;
        console.log(`Apartment: ${totalSumA.toFixed(2)} lv.`);
        console.log(`Studio: ${(totalSumS * 0.95).toFixed(2)} lv.`);
      } else if (sleepingDays > 14) {
        totalSumA = sleepingDays * 65;
        totalSumS = sleepingDays * 50;
        console.log(`Apartment: ${(totalSumA * 0.9).toFixed(2)} lv.`);
        console.log(`Studio: ${(totalSumS * 0.7).toFixed(2)} lv.`);
      }
      break;

    case "June":
    case "September":
      if (sleepingDays > 14) {
        totalSumA = sleepingDays * 68.7;
        totalSumS = sleepingDays * 75.2;
        console.log(`Apartment: ${(totalSumA * 0.9).toFixed(2)} lv.`);
        console.log(`Studio: ${(totalSumS * 0.8).toFixed(2)} lv.`);
      } else {
        totalSumA = sleepingDays * 68.7;
        totalSumS = sleepingDays * 75.2;
        console.log(`Apartment: ${totalSumA.toFixed(2)} lv.`);
        console.log(`Studio: ${totalSumS.toFixed(2)} lv.`);
      }
      break;

    case "July":
    case "August":
      if (sleepingDays > 14) {
        totalSumA = sleepingDays * 77;
        totalSumS = sleepingDays * 76;
        console.log(`Apartment: ${(totalSumA * 0.9).toFixed(2)} lv.`);
        console.log(`Studio: ${totalSumS.toFixed(2)} lv.`);
      } else {
        totalSumA = sleepingDays * 77;
        totalSumS = sleepingDays * 76;
        console.log(`Apartment: ${totalSumA.toFixed(2)} lv.`);
        console.log(`Studio: ${totalSumS.toFixed(2)} lv.`);
      }
      break;
  }
}

hotel(["May", "13"]);
hotel(["June", "14"]);
hotel(["August", "7"]);
hotel(["September", "15"]);

