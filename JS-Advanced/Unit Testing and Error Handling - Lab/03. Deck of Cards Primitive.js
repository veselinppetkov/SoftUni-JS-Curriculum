function printDeckOfCards(cards) {
  const result = [];

  for (let singleCard of cards) {
    const face = singleCard.slice(0, -1);
    const suit = singleCard.slice(-1);
    try {
      result.push(createCard(face, suit));
    } catch (err) {
      return console.log(`Invalid card: ${singleCard}`);
    }
  }

  console.log(result.join(""));

  function createCard(face, suit) {
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const validSuits = {
      S: "\u2660 ",
      H: "\u2665 ",
      D: "\u2666 ",
      C: "\u2663 ",
    };

    if (!validFaces.includes(face)) {
      throw new Error(`Invalid face ${face}`);
    }

    if (!Object.keys(validSuits).includes(suit)) {
      throw new Error(`Invalid suit ${suit}`);
    }

    return {
      face,
      suit: validSuits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
  }
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);
printDeckOfCards(["5S", "3D", "QD", "1C"]);
