function books(input) {
  let favB = input[0];
  let i = 1;
  let books = input[i];

  while (books != favB) {
    i++;
    books = input[i];
    if (books == "No More Books") {
      console.log(`The book you search is not here!`);
      console.log(`You checked ${i - 1} books.`);
      break;
    }
  }
  if (books != "No More Books") {
  console.log(`You checked ${i - 1} books and found it.`);
}
}

books(["Troy", "Stronger", "Life Style", "Troy"]);
books([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
books([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
