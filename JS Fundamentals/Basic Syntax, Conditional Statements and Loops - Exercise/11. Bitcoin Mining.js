function bitcoin(input) {
  let bitcoinPrice = 11949.16;
  let bitCounter = 0;
  let bitAmount = 0;
  let bitMined = 0;
  let goldPrice = 67.51;
  let days = 0;
  let goldMined = 0;
  let firstDay = 0;

  for (let i = 0; i < input.length; i++) {
    days++;

    if (days % 3 == 0) {
      goldMined += input[i] * 0.7 * goldPrice;
    } else {
      goldMined += input[i] * goldPrice;
    }

    if (goldMined >= bitcoinPrice) {
      bitCounter++;
      bitAmount += Math.trunc(goldMined / bitcoinPrice);
      bitMined = Math.trunc(goldMined / bitcoinPrice);
      goldMined -= bitcoinPrice * bitMined;

      if (bitCounter == 1) {
        firstDay = days;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitAmount}`);
  if (bitAmount >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstDay} `);
  }
  console.log(`Left money: ${goldMined.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124]);
console.log(`--------------------------`);
bitcoin([100, 200, 300]);
console.log(`--------------------------`);
bitcoin([50, 100]);
