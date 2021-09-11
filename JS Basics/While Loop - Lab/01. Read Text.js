function solve(input) {
  let i = 0;
  let text = input[i];

  while (text !== "Stop") {
    console.log(text);
    i++;
    text = input[i];
  }
}

solve([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
