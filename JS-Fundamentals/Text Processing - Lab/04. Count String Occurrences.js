function count(text, word) {
  let splitted = text.split(" ");
  let list = [];
  while (splitted.includes(word)) {
    let index = splitted.indexOf(word);
    let symbol = splitted.splice(index, 1);
    list.push(symbol);
  }
  console.log(list.length);
}
count("This is a word and it also is a sentence", "is");
