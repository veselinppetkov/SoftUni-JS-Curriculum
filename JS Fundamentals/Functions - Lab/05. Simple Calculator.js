function calculator(num1, num2, operation) {
  let result;
  switch (operation) {
    case "multiply":
      result = num1 * num2;
      break;
    case "add":
      result = num1 + num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
  }
  console.log(result);
}
calculator(5, 5, "multiply");
