function sum(n, m) {
  let totalSum = 0;
  for (let i = Number(n); i <= Number(m); i++) {
    totalSum += i;
  }
  console.log(totalSum);
}

sum(1, 5);
sum(-8, 20);
