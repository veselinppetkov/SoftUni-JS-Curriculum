function carFactory(carObj) {
  let resultCarObj = {};

  function getEngine(power) {
    if (power <= 90) {
      return { power: 90, volume: 1800 };
    } else if (power <= 120) {
      return { power: 120, volume: 2400 };
    } else {
      return { power: 200, volume: 3500 };
    }
  }

  resultCarObj["model"] = carObj["model"];
  resultCarObj["engine"] = getEngine(carObj.power);
  resultCarObj["carriage"] = { type: carObj.carriage, color: carObj.color };
  resultCarObj["wheels"] = new Array(4).fill(
    carObj.wheelsize % 2 == 0 ? (carObj.wheelsize -= 1) : carObj.wheelsize
  );
  return resultCarObj;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
