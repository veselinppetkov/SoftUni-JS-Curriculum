function replace(string) {
  let unique = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] != string[i + 1]) {
      unique.push(string[i]);
    }
  }
  console.log(unique.join(""));
}
replace("aaaaabbbbbcdddeeeedssaa");
replace("qqqwerqwecccwd");
