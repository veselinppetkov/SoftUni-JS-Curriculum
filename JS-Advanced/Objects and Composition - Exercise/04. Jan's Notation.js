function notation(arr) {
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      numbers.push(Number(arr[i]));
    } else {
      if (numbers.length < 2) {
        console.log(`Error: not enough operands!`);
        return;
      }
      let n2 = numbers.pop();
      let n1 = numbers.pop();
      if (arr[i] == "+") {
        numbers.push(n1 + n2);
      } else if (arr[i] == "-") {
        numbers.push(n1 - n2);
      } else if (arr[i] == "*") {
        numbers.push(n1 * n2);
      } else if (arr[i] == "/") {
        numbers.push(n1 / n2);
      }
    }
  }
  if (numbers.length == 1) {
    console.log(numbers.join(""));
  } else if (numbers.length > 1) {
    console.log(`Error: too many operands!`);
  }
}

notation([31, 2, "+", 11, "/"]);
