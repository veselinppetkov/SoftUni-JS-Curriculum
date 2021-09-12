function neighborhoods(list) {
  let obj = {};

  let streets = list.shift().split(", ");

  for (let neighborhood of streets) {
    obj[neighborhood] = [];
  }

  for (let hoods of list) {
    let [neighborhood, person] = hoods.split(" - ");
    if (streets.includes(neighborhood)) {
      obj[neighborhood].push(person);
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1].length - a[1].length);

  for (let [street, people] of sorted) {
    if (people.length > 0) {
      console.log(`${street}: ${people.length}\n--${people.join("\n--")}`);
    } else {
      console.log(`${street}: ${people.length}`);
    }
  }
}
neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
