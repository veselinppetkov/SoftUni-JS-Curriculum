function stringSub(word, text) {
  for (tokens of text.split(" ")) {
    if (tokens.toLowerCase() == word.toLowerCase()) {
      return console.log(word);
    }
  }

  console.log(`${word} not found!`);
}

stringSub("javascript", "JavaScript is the best programming language");
stringSub("IS", "JavaScript is the best programming language");
