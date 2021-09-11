function tournament(input) {
  let i = 0;
  let days = Number(input[i++]);
  let wins = 0;
  let loses = 0;
  let day = 1;
  let total = 0;
  let totalWins = 0;

  while (day <= days) {
    let game = input[i++];
    while (game !== "Finish") {
      let result = input[i++];
      if (result == "win") {
        wins++;
      } else {
        loses++;
      }
      game = input[i++];
    }
    let money = wins * 20;
    if (wins > loses) {
      money *= 1.1;
      totalWins++;
    }
    wins = 0;
    loses=0;
    total += money;
    day++;
  }
  if (totalWins > days / 2) {
    total *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${total.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${total.toFixed(2)}`
    );
  }
}

tournament([
  "3",

  "darts",

  "lose",

  "handball",

  "lose",

  "judo",

  "win",

  "Finish",

  "snooker",

  "lose",

  "swimming",

  "lose",

  "squash",

  "lose",

  "table tennis",

  "win",

  "Finish",

  "volleyball",

  "win",

  "basketball",

  "win",

  "Finish",
]);
tournament(["2",

"volleyball",

"win",

"football",

"lose",

"basketball",

"win",

"Finish",

"golf",

"win",

"tennis",

"win",

"badminton",

"win",

"Finish"])
