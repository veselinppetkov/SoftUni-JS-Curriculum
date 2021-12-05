function orders(beverage, amount) {
  let price = 0;

  switch (beverage) {
    case "water":
      price = 1;
      break;
    case "coffee":
      price = 1.5;
      break;
    case "snacks":
      price = 2;
      break;
    case "coke":
      price = 1.4;
      break;
  }
  console.log((price * amount).toFixed(2));
}
orders("coffee", 1);
orders("coke", 1);
orders("water", 1);
orders("snacks", 1);
