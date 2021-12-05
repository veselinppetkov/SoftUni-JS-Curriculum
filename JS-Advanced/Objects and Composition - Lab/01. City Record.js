function cityTaxes(name, population, treasury) {
  let cityObj = {
    name: name,
    population,
    treasury,
  };
  return cityObj;
}
console.log(cityTaxes("Tortuga", 7000, 15000));
