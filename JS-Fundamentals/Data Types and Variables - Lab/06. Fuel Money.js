function fuelMoney(distance, people, priceForLiter) {
  let extra = people * 0.1;
  let consumption = (distance / 100) * (7 + extra);
  let consumptionPrice = consumption * priceForLiter;

  console.log(
    `Needed money for that trip is ${consumptionPrice.toFixed(2)}lv.`
  );
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);
