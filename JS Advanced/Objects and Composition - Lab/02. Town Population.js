function townPopulation(arr) {
  let register = {};

  for (let data of arr) {
    let [city, population] = data.split(" <-> ");
    if (!register.hasOwnProperty(city)) {
      register[city] = Number(population);
    } else {
      register[city] += Number(population);
    }
  }
  for (let [city, population] of Object.entries(register)) {
    console.log(`${city} : ${population}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log(`---------------`);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
