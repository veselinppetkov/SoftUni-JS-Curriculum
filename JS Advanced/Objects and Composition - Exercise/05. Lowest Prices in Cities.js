function lowestPrices(input) {
  let resultObj = {};
  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (!resultObj.hasOwnProperty(product)) {
      resultObj[product] = {};
    }
    resultObj[product][town] = price;
  }
  Object.keys(resultObj).forEach((key) => {
    let sorted = Object.entries(resultObj[key]).sort((a, b) => a[1] - b[1]);
    let price = Number(sorted[0][1]);
    let city = sorted[0][0];
    console.log(`${key} -> ${price} (${city})`);
  });
}
// lowestPrices([
//   "Sofia City | Audi | 100000",
//   "Sofia City | BMW | 100000",
//   "Sofia City | Mitsubishi | 10000",
//   "Sofia City | Mercedes | 10000",
//   "Sofia City | NoOffenseToCarLovers | 0",
//   "Mexico City | Audi | 1000",
//   "Mexico City | BMW | 99999",
//   "New York City | Mitsubishi | 10000",
//   "New York City | Mitsubishi | 1000",
//   "Mexico City | Audi | 100000",
//   "Washington City | Mercedes | 1000",
// ]);
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
