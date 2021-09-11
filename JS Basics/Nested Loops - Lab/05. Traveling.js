function traveling(input) {
  let i = 0;
  let line = input[i];
  let savedMoney = 0;

  while (line !== "End") {
    destination = line;
    i++;
    let price = Number(input[i]);

    while (savedMoney < price) {
      savedMoney += Number(input[++i]);
    }
    console.log(`Going to ${destination}!`);
    savedMoney = 0;
    i++;
    line = input[i];
  }
}
traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
