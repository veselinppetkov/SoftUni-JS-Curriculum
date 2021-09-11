function house(input) {
  let flower = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);

  let price = 0;

  switch (flower) {
    case "Roses":
      if (count > 80) {
        price = count * 5 * 0.9;
      } else {
        price = count * 5;
      }
      break;

    case "Dahlias":
      if (count > 90) {
        price = count * 3.8 * 0.85;
      } else {
        price = count * 3.8;
      }
      break;

    case "Tulips":
      if (count > 80) {
        price = count * 2.8 * 0.85;
      } else {
        price = count * 2.8;
      }
      break;

    case "Narcissus":
      if (count < 120) {
        price = count * 3 * 1.15;
      } else {
        price = count * 3;
      }
      break;

    case "Gladiolus":
      if (count < 80) {
        price = count * 2.5 * 1.2;
      } else {
        price = count * 2.5;
      }
      break;
  }

  if (budget >= price) {
    moneyLeft = budget - price;
    console.log(
      `Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    moneyNeeded = price - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
house(["Roses", "55", "250"]);
house(["Tulips", "88", "260"]);
house(["Narcissus", "119", "360"]);
