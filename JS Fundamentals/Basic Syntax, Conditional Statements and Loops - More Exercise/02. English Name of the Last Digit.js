function solve(num) {
  let obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let last = num.toString();
  last = Number(last[last.length - 1]);

  console.log(obj[last]);
}
solve(1643);
