function rightPlace(word, char, rightWord) {
  let result = word.replace("_", char);

  console.log(result === rightWord ? "Matched" : "Not Matched");
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
