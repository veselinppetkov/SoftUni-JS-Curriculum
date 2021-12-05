function checker(n) {
  let checker = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      checker++;
    }
  }
  if (checker == 2) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}
checker(7);
checker(8);
checker(81);
