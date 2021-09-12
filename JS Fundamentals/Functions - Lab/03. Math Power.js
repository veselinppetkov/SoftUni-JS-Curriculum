function math(num, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= num;
  }
  console.log(result);
}
math(3, 4);
