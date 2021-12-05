function storeCatalogue(input) {
  let register = {};
  for (let el of input) {
    let [product, price] = el.split(" : ");
    price = Number(price);
    let firstLetter = product[0];
    if (!register.hasOwnProperty(firstLetter)) {
      register[firstLetter] = {};
    }
    register[firstLetter][product] = price;
  }

  let sortedEntries = Object.entries(register).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sortedEntries.forEach((letter) => {
    let sortedProducts = Object.entries(register[letter[0]]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    console.log(letter[0]);
    sortedProducts.forEach((data) => {
      let product = data[0];
      let price = data[1];
      console.log(`  ${product}: ${price}`);
    });
  });
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
