function wordOccurs(arr) {
  let obj = {};

  for (let word of arr) {
    if (obj.hasOwnProperty(word)) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (let [words, count] of sorted) {
    console.log(`${words} -> ${count} times`);
  }
}
wordOccurs([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
