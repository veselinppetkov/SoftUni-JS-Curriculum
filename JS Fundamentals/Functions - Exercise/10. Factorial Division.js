function factorialDivision(factorial, divisor) {
  function fact(factorial) {
    let sum = 1;
    for (let i = 1; i <= factorial; i++) {
      sum *= i;
    }
    return sum;
  }
  return (fact(factorial) / fact(divisor)).toFixed(2);
}

console.log(factorialDivision(5, 4));
