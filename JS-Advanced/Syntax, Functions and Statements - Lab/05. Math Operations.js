function mathOps(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else if (operator == "%") {
    return num1 % num2;
  } else if (operator == "**") {
    return num1 ** num2;
  }
}
console.log(mathOps(5, 6, "+"));
console.log(mathOps(3, 5.5, "*"));
