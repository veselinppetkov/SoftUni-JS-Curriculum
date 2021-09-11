function leapYears(input) {
  let firstY = Number(input[0]);
  let secondY = Number(input[1]);

  for (let i = firstY; i <= secondY; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}
leapYears(["1908", "1919"]);
