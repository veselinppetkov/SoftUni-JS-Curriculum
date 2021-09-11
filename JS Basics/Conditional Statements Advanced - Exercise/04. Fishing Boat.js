function fishing(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);

  let springRentPrice = 3000;
  let sumAndAutRentPrice = 4200;
  let winterRentPrice = 2600;

  let priceAfterDiscount = 0;

  switch (season) {
    case "Spring":
      if (fishermen <= 6) {
        priceAfterDiscount = springRentPrice * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        priceAfterDiscount = springRentPrice * 0.85;
      } else if (fishermen > 12) {
        priceAfterDiscount = springRentPrice * 0.75;
      }
      break;

    case "Summer":
    case "Autumn":
      if (fishermen <= 6) {
        priceAfterDiscount = sumAndAutRentPrice * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        priceAfterDiscount = sumAndAutRentPrice * 0.85;
      } else if (fishermen > 12) {
        priceAfterDiscount = sumAndAutRentPrice * 0.75;
      }
      break;

    case "Winter":
      if (fishermen <= 6) {
        priceAfterDiscount = winterRentPrice * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        priceAfterDiscount = winterRentPrice * 0.85;
      } else if (fishermen > 12) {
        priceAfterDiscount = winterRentPrice * 0.75;
      }
      break;

      }
  
  if (fishermen % 2 == 0 && season != "Autumn") {
    priceAfterDiscount -= priceAfterDiscount*0.05;
  }

  
  if (budget >= priceAfterDiscount) {
    let moneyLeft = budget - priceAfterDiscount;  
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = priceAfterDiscount - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishing(["2000", "Winter", "10"]);
