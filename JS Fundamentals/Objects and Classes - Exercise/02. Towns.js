function towns(arr) {
  for (let elements of arr) {
    let [town, latitude, longitude] = elements.split(" | ");

    let lat = Number.parseFloat(latitude).toFixed(2);
    let long = Number.parseFloat(longitude).toFixed(2);

    let obj = {
      town,
      latitude: lat,
      longitude: long,
    };

    console.log(obj);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
