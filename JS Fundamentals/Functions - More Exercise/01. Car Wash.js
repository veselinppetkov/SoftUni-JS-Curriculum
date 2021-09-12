function carWash(operations) {
  let cleaned = 0;
  let actions = {
    soap: soap,
    water: water,
    "vacuum cleaner": vacuumCleaner,
    mud: mud,
  };

  while (operations.length > 0) {
    let operation = operations.shift();
    actions[operation]();
  }

  function soap() {
    cleaned += 10;
  }

  function water() {
    cleaned *= 1.2;
  }

  function vacuumCleaner() {
    cleaned *= 1.25;
  }

  function mud() {
    cleaned = cleaned * 0.9;
  }

  return `The car is ${cleaned.toFixed(2)}% clean.`;
}
console.log(
  carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);
