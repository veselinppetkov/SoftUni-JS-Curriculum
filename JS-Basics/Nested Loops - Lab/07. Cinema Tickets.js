function cinema(input) {
  let i = 0;
  let movie = input[i++];

  let student = 0;
  let standard = 0;
  let kids = 0;

  while (movie != "Finish") {
    let freeSeats = Number(input[i++]);
    let type = input[i++];
    let tickets = 0;

    while (type != "Finish" && type != "End") {
      tickets++;
      if (type == "student") {
        student++;
      } else if (type == "standard") {
        standard++;
      } else if (type == "kid") {
        kids++;
      }
      if (tickets == freeSeats) {
        break;
      }
      type = input[i++];
    }
    console.log(
      `${movie} - ${((tickets / freeSeats) * 100).toFixed(2)}% full.`
    );
    if (type == "Finish") {
      console.log(`Total tickets: ${tickets}`);
      break;
    }
    movie = input[i++];
  }
  let total = student + standard + kids;
  console.log(`Total tickets: ${total}`);
  console.log(`${((student / total) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standard / total) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kids / total) * 100).toFixed(2)}% kids tickets.`);
}
cinema([
  "The Matrix",

  "20",

  "student",

  "standard",

  "kid",

  "kid",

  "student",

  "student",

  "standard",

  "student",

  "End",

  "The Green Mile",

  "17",

  "student",

  "standard",

  "standard",

  "student",

  "standard",

  "student",

  "End",

  "Amadeus",

  "3",

  "standard",

  "standard",

  "standard",
  "Finish",
]);
