function solve(input) {
  let n = Number(input.shift());
  let pattern = /(\|)([A-Z]{4,})\1:{1}(#)([A-Za-z]+\s{1}[A-Za-z]+)\3/g;

  for (let i = 0; i < n; i++) {
    let match = pattern.exec(input[i]);
    if (match != null) {
      console.log(`${match[2]}, The ${match[4]}`);
      console.log(`>> Strength: ${match[2].length}`);
      console.log(`>> Armour: ${match[4].length}`);
    } else {
      console.log(`Access denied!`);
    }
  }
}
// solve([
//   "3",
//   "|GEORGI|:#Lead architect#",
//   "|Hristo|:#High Overseer#",
//   "|STEFAN|:#Assistant Game Developer#",
// ]);

solve([
  "3",
  "|PETER|:#H1gh Overseer#",
  "|IVAN|:#Master detective#",
  "|KARL|: #Marketing lead#",
]);
