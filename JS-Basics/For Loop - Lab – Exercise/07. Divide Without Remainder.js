function divide(input) {
  let n = Number(input.shift());
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (i = 0; i < n; i++) {
    let currentNum = Number(input.shift());

    if (currentNum % 2 === 0) {
      p1++;
    } if (currentNum % 3 === 0) {
      p2++;
    }
    if (currentNum % 4 === 0) {
      p3++;
    }
  }
  let sumP1 = ((p1 / n) * 100).toFixed(2);
  let sumP2 = ((p2 / n) * 100).toFixed(2);
  let sumP3 = ((p3 / n) * 100).toFixed(2);

  console.log(`${sumP1}%`);
  console.log(`${sumP2}%`);
  console.log(`${sumP3}%`);
}

divide([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
