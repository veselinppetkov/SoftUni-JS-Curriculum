function revealWords(words, text) {
  words = words.split(", ");

  for (let word of words) {
    let match = "*".repeat(word.length);

    text = text.replace(match, word);
  }

  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
