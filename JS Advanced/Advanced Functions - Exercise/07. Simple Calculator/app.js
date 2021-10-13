function calculator() {
  const html = {
    num1: "",
    num2: "",
    output: "",
  };

  return {
    init(firstNum, secondNum, result) {
      html.num1 = document.querySelector(firstNum);
      html.num2 = document.querySelector(secondNum);
      html.output = document.querySelector(result);
    },
    add() {
      html.output.value = Number(html.num1.value) + Number(html.num2.value);
    },
    subtract() {
      html.output.value = Number(html.num1.value) - Number(html.num2.value);
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
