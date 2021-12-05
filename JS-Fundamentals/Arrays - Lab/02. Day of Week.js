function dayOfWeek(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day < 1 || day > 7) {
    console.log(`Invalid day!`);
  } else {
    console.log(days[day - 1]);
  }
}
dayOfWeek(3);
dayOfWeek(7);
dayOfWeek(9);
dayOfWeek(-1);
