function repeatString(string, n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += string;
  }
  console.log(result);
}
repeatString("String", 2);
