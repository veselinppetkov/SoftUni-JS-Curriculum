function wordsUpper(input) {
  let pattern = /\w+/gm;
  let upperCaseArr = [];
  let match = pattern.exec(input);
  while (match != null) {
    upperCaseArr.push(match[0].toUpperCase());
    match = pattern.exec(input);
  }
  console.log(upperCaseArr.join(", "));
}
wordsUpper(`Hi, how are you?`);
