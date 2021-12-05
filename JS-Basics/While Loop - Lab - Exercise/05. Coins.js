function coins(input) {
  let change = Math.trunc(Number(input[0]) * 100);
  let coins = 0;

  while (change !== 0) {
    if (change - 200 >= 0) {
      coins++;
      change = change - 200;
    } else if (change - 100 >= 0) {
      coins++;
      change = change - 100;
    } else if (change - 50 >= 0) {
      coins++;
      change = change - 50;
    } else if (change - 20 >= 0) {
      coins++;
      change = change - 20;
    } else if (change - 10 >= 0) {
      coins++;
      change = change - 10;
    } else if (change - 5 >= 0) {
      coins++;
      change = change - 5;
    } else if (change - 2 >= 0) {
      coins++;
      change = change - 2;
    } else if (change - 1 >= 0) {
      coins++;
      change = change - 1;
    } else {
      break;
    }
  }
  console.log(coins);
}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
coins(["0.59"]);
