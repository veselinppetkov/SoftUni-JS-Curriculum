function numbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
 let result = 0;

  switch (operator) {
    case "+":
      result = n1 + n2;
      if (result % 2 == 0) {
        console.log(`${n1} ${operator} ${n2} = ${result} - even`);
      } else {
        console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
      }
      break;

    case "-":
      result = n1 - n2;
      if (result % 2 == 0) {
        console.log(`${n1} ${operator} ${n2} = ${result} - even`);
      } else {
        console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
      }
      break;

    case "*":
      result = n1 * n2;
      if (result % 2 == 0) {
        console.log(`${n1} ${operator} ${n2} = ${result} - even`);
      } else {
        console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
      }
      break;

    case "/":
      result = n1 / n2;
      if (n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
      }
      break;

    case "%":
      result = n1 % n2;
      if (n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        console.log(`${n1} % ${n2} = ${result}`);
      }
      break;
  }
}

// numbers(["10", "12", "+"]);
// numbers(["10", "1", "-"]);
// numbers(["7", "3", "*"]);
// numbers(["123", "12", "/"]);
// numbers(["10", "3", "%"]);
numbers(["112", "0", "/"]);
numbers(["10", "0", "%"]);
