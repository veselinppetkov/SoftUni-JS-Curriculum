function cardGame(list) {
  let players = {};
  let points = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
  let result = {};

  for (let tokens of list) {
    let command = tokens.split(": ");
    let person = command[0];
    let cards = command[1].split(", ");
    if (!players.hasOwnProperty(person)) {
      players[person] = [];
    }

    players[person] = players[person].concat(cards);
  }

  for (let [playerName, playerCards] of Object.entries(players)) {
    result[playerName] = 0;
    let final = [...new Set(playerCards)];
    for (let card of final) {
      let cardAsArray = Array.from(card);
      let type = cardAsArray.pop();
      let power = cardAsArray.join("");
      let cardPoints = 0;

      if (Object.keys(points).includes(power)) {
        cardPoints = points[power] * points[type];
      } else {
        cardPoints = Number(power) * points[type];
      }

      result[playerName] += cardPoints;
    }
  }
  for (let [name, points] of Object.entries(result)) {
    console.log(`${name}: ${points}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
