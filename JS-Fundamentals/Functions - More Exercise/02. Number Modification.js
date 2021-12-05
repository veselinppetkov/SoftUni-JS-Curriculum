function modification(num) {
  let modificated = num.toString().split("");
  modificated = modificated.map(Number);
  let sum = Number(modificated.reduce((a, b) => a + b));

  while (sum / modificated.length < 5) {
    modificated.push(9);
    sum = Number(modificated.reduce((a, b) => a + b));
  }

  console.log(modificated.join(""));
}
modification(101);
modification(5835);
