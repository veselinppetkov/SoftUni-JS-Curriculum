function day(year, month, day) {
  let date = new Date(year, month - 1, day - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

day(2016, 9, 30);
day(2016, 10, 1);
day(2016, 1, 1);
day(2015, 12, 42);
day(1997, 9, 1);
