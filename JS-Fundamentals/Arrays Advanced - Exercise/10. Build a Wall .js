function build(arr) {
  let daily = [];
  let counter = 0;
  let arraySum = arr.reduce((a, b) => a + b);

  while (arraySum < arr.length * 30) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 30) {
        arr[i] += 1;
        counter++;
      }
    }
    daily.push(counter * 195);
    counter = 0;
    arraySum = arr.reduce((a, b) => a + b);
  }
  console.log(daily.join(", "));
  console.log(`${daily.reduce((a, b) => a + b) * 1900} pesos`);
}
build([21, 25, 28]);
build([17]);
build([17, 22, 17, 19, 17]);
