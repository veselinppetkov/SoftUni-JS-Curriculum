function smallShop(input) {
  let drink = input[0];
  let city = input[1];
  let amount = input[2];
  let price = 0;

  switch (drink) {
    case "coffee":
      if (city == "Sofia") {
        price = amount * 0.5;
      } else if (city == "Plovdiv") {
        price = amount * 0.4;
      } else if (city == "Varna") {
        price = amount * 0.45;
      }
      break;

    case "water":
      if (city == "Sofia") {
        price = amount * 0.8;
      } else if (city == "Plovdiv") {
        price = amount * 0.7;
      } else if (city == "Varna") {
        price = amount * 0.7;
      }
      break;

    case "beer":
      if (city == "Sofia") {
        price = amount * 1.2;
      } else if (city == "Plovdiv") {
        price = amount * 1.15;
      } else if (city == "Varna") {
        price = amount * 1.1;
      }
      break;

    case "sweets":
      if (city == "Sofia") {
        price = amount * 1.45;
      } else if (city == "Plovdiv") {
        price = amount * 1.30;
      } else if (city == "Varna") {
        price = amount * 1.35;
      }
      break; 

    case "peanuts":
      if (city == "Sofia") {
        price = amount * 1.6;
      } else if (city == "Plovdiv") {
        price = amount * 1.5;
      } else if (city == "Varna") {
        price = amount * 1.55;
      }
  }

  console.log(price);
}

smallShop(["sweets", "Sofia", "2.23"]);
