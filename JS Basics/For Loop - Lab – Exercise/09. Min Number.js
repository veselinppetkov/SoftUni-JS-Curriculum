function min(input) {
  let count = Number(input.shift());
  let minNumber = Number.MAX_SAFE_INTEGER;
  let number = Number(input.shift());

  for (let i = 1; i <= count; i++) {
    
    if (minNumber > number) {
        minNumber = number;
    }
    number = Number(input.shift());
  }
  console.log(minNumber);
}
min(["2", "100", "99"]);
min(["3", "-10", "20", "-30"]);
