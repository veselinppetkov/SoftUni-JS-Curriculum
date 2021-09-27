function townsToJSON(data) {
  let resultArr = [];
  let [town, latitude, longitude] = data
    .shift()
    .split("|")
    .slice(1, 4)
    .toString()
    .trim()
    .split(" , ");

  for (let elements of data) {
    let [currTown, currLatitude, currLongitude] = elements
      .split("|")
      .slice(1, 4)
      .toString()
      .trim()
      .split(" , ");
    const resultObj = {};
    resultObj[town] = currTown;
    resultObj[latitude] = Number(Number(currLatitude).toFixed(2));
    resultObj[longitude] = Number(Number(currLongitude).toFixed(2));
    resultArr.push(resultObj);
  }
  console.log(JSON.stringify(resultArr));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
