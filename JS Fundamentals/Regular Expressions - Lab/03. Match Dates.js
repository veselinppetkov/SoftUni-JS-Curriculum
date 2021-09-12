function match(input) {
  let pattern =
    /\b(?<DAY>\d{2})(?<SEPARATOR>[-|.|/])(?<MONTH>[A-Z]{1}[a-z]{2})\2(?<YEAR>\d{4})\b/g;
  let match = pattern.exec(input);
  result = [];

  while (match != null) {
    let { DAY, MONTH, YEAR } = match.groups;
    console.log(`Day: ${DAY}, Month: ${MONTH}, Year: ${YEAR}`);
    match = pattern.exec(input);
  }
}
match(
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
);
