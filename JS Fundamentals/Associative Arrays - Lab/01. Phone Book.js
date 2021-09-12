function phoneBook(list) {
  let phBook = {};

  for (let elements of list) {
    let [name, number] = elements.split(" ");
    phBook[name] = number;
  }
  for (let [key, value] of Object.entries(phBook)) {
    console.log(`${key} -> ${value}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
