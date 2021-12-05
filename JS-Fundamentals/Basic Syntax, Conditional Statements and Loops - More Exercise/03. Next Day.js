function day(year, month, day) {
  let date = new Date(year, month - 1, day + 1);
  let obj = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  let pattern =
    /\b(?<month>[A-Z]{1}[a-z]{2}) (?<day>\d{1,2}) (?<year>\d{4})\b/gm;
  let match = pattern.exec(date);
  console.log(`${match[3]}-${obj[match[1]]}-${Number(match[2])}`);
}
day(2016, 9, 30);
