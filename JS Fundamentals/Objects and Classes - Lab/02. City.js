function solve(arr) {
  let city = {
    name: arr.name,
    area: arr.area,
    population: arr.population,
    country: arr.country,
    postCode: arr.postCode,
  };

  for (let keys of Object.keys(city)) {
    console.log(`${keys} -> ${city[keys]}`);
  }
}

solve({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
