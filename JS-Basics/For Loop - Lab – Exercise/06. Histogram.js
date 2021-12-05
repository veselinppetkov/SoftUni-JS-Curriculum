function histogram(input) {
  let n = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 200) {
      p1++;
    } else if (currentNum >= 200 && currentNum <= 399) {
      p2++;
    } else if (currentNum >= 400 && currentNum <= 599) {
      p3++;
    } else if (currentNum >= 600 && currentNum <= 799) {
      p4++;
    } else {
      p5++;
    }
  }

  let numP1 = ((p1 / n) * 100).toFixed(2);
  let numP2 = ((p2 / n) * 100).toFixed(2);
  let numP3 = ((p3 / n) * 100).toFixed(2);
  let numP4 = ((p4 / n) * 100).toFixed(2);
  let numP5 = ((p5 / n) * 100).toFixed(2);

  console.log(`${numP1}%`);
  console.log(`${numP2}%`);
  console.log(`${numP3}%`);
  console.log(`${numP4}%`);
  console.log(`${numP5}%`);
}

histogram(["3", "1", "2", "999"]);
