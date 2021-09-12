function solve(text) {
  let arrText = text.split(" ");
  let result = [];

  for (let char of arrText) {
    if (char.length > 1 && char[0] == "#") {
      let valid = true;
      for (let symbol of char.substring(1)) {
        let code = symbol.charCodeAt(0);
        if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
          valid = false;
          break;
        }
      }
      if (valid) {
        result.push(char.substring(1));
      }
    }
  }

  for (let word of result) {
    console.log(word);
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
