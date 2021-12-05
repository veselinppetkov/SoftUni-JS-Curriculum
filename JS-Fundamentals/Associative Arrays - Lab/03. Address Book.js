function addressBook(list) {
  let book = {};

  for (let tokens of list) {
    let [name, address] = tokens.split(":");
    book[name] = address;
  }
  let entriesSorted = Object.entries(book);
  entriesSorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let tokens of entriesSorted) {
    console.log(`${tokens[0]} -> ${tokens[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
