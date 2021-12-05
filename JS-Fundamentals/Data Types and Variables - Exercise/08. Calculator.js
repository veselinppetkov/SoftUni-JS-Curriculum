function calculator(numberOne, operator, numberTwo) {
  console.log(eval(`${numberOne}${operator}${numberTwo}`).toFixed(2));
}
calculator(10, "+", 10);
