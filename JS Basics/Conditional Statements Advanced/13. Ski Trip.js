function trip(input) {
  let daysOfStaying = Number(input[0]);
  let room = input[1];
  let grade = input[2];

  let room1Person = 18;
  let apart = 25;
  let presidentApart = 35;
  let daysOfSleeping = daysOfStaying - 1;

  let sum = 0;
  let priceAfterDiscount = 0;
  let priceAfterGrade = 0;

  switch (room) {
    case "room for one person":
      sum = room1Person * daysOfSleeping;
      if (grade == "positive") {
        priceAfterGrade = sum * 1.25;
      } else {
        priceAfterGrade = priceAfterDiscount * 0.9;
      }
      break;

    case "apartment":
      sum = apart * daysOfSleeping;
      if (daysOfStaying < 10) {
        priceAfterDiscount = sum * 0.7;
      } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
        priceAfterDiscount = sum * 0.65;
      } else if (daysOfStaying > 15) {
        priceAfterDiscount = sum * 0.5;
      }
      if (grade == "positive") {
        priceAfterGrade = priceAfterDiscount * 1.25;
      } else {
        priceAfterGrade = priceAfterDiscount * 0.9;
      }
      break;

    case "president apartment":
      sum = presidentApart * daysOfSleeping;
      if (daysOfStaying < 10) {
        priceAfterDiscount = sum * 0.9;
      } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
        priceAfterDiscount = sum * 0.85;
      } else if (daysOfStaying > 15) {
        priceAfterDiscount = sum * 0.8;
      }
      if (grade == "positive") {
        priceAfterGrade = priceAfterDiscount * 1.25;
      } else {
        priceAfterGrade = priceAfterDiscount * 0.9;
      }
      break;
  }

  console.log(priceAfterGrade.toFixed(2));
}

trip(["14", "apartment", "positive"]);
trip(["30", "president apartment", "negative"]);
trip(["12", "room for one person", "positive"]);
trip(["2", "apartment", "positive"]);
