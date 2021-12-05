function wordTracker(list) {
  let words = {};

  let wordsToSearch = list.shift().split(" ");

  for (let counter of wordsToSearch) {
    words[counter] = 0;
  }

  for (let word of list) {
    if (wordsToSearch.includes(word)) {
      words[word] += 1;
    }
  }

  let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

  for (let [word, counter] of sorted) {
    console.log(`${word} - ${counter}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "this",
  "sentence",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
