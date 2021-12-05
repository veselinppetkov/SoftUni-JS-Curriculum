function catalogue(arr) {
  let catalogue = {};

  for (let elements of arr) {
    let [name, price] = elements.split(" : ");
    if (!catalogue.hasOwnProperty([name[0]])) {
      catalogue[name[0]] = [];
    }
    catalogue[name[0]].push([name, price]);
  }

  let firstSort = Object.keys(catalogue).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let elements of firstSort) {
    Object.values(catalogue[elements].sort((a, b) => a[0].localeCompare(b[0])));
    console.log(elements);
    catalogue[elements].forEach((element) => {
      console.log(`  ${element[0]}: ${element[1]}`);
    });
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
// catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
