function solve(arr) {
  let garageMap = new Map();

  for (let el of arr) {
    let [garage, carValues] = el.split(" - ");
    if (!garageMap.has(garage)) {
      garageMap.set(garage, [carValues]);
    } else {
      let availableCars = garageMap.get(garage);
      availableCars.push(carValues);
      garageMap.set(garage, availableCars);
    }
  }
  let sortedGarages = [...garageMap.entries()].sort((a, b) => a[0] - b[0]);
  let output = "";
  for (let [currentGarage, currentKeyValue] of sortedGarages) {
    output += `Garage № ${currentGarage}\n`;
    for (let currentCarProps of currentKeyValue) {
      currentCarProps = currentCarProps.replace(/: /g, " - ");
      output += `--- ${currentCarProps}\n`;
    }
  }
  console.log(output);
}
solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
