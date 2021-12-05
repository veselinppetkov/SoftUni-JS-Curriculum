function autoCompany(arr) {
  const carMap = new Map();
  arr.forEach((data) => {
    let [brand, model, producedCars] = data.split(" | ");
    producedCars = Number(producedCars);
    if (!carMap.has(brand)) {
      carMap.set(brand, new Map());
      carMap.get(brand).set(model, producedCars);
    } else {
      if (carMap.get(brand).has(model)) {
        producedCars += carMap.get(brand).get(model);
        carMap.get(brand).set(model, producedCars);
      } else {
        carMap.get(brand).set(model, producedCars);
      }
    }
  });
  [...carMap].forEach(([brand, brandMap]) => {
    console.log(brand);
    [...brandMap].forEach(([model, producedCars]) =>
      console.log(`###${model} -> ${producedCars}`)
    );
  });
}
autoCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
