function travelTime(arr) {
  let destination = {};

  for (let tokens of arr) {
    let [country, city, money] = tokens.split(" > ");

    if (!destination.hasOwnProperty(country)) {
      destination[country] = {};
    }

    if (!destination[country].hasOwnProperty(city)) {
      destination[country][city] = Number(money);
    }

    if (Number(money) < destination[country][city]) {
      destination[country][city] = Number(money);
    }
  }

  let sortedCountries = Object.entries(destination).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let elements of sortedCountries) {
    let country = elements[0];
    let other = elements[1];
    let result = `${country} -> `;
    for (let [city, money] of Object.entries(other)) {
      result += `${city} -> ${money} `;
    }
    console.log(result);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
