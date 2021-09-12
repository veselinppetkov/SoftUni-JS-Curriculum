function destination(input) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/gm;
  let match = pattern.exec(input);
  let dest = [];
  let result = 0;

  while (match !== null) {
    dest.push(match[2]);
    result += Number(match[2].length);
    match = pattern.exec(input);
  }
  console.log(`Destinations: ${dest.join(", ")}`);
  console.log(`Travel Points: ${result}`);
}

destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
