function solve(text) {
  let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
  let result = [];

  let match = pattern.exec(text);
  while (match !== null) {
    result.push(match[0]);
    match = pattern.exec(text);
  }
  console.log(result.join(" "));
}

solve(
  `Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov, Blagoy Georgiev`
);
