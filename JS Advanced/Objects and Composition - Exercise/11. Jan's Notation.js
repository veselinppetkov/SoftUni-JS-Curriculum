function jansNotation(input) {
  let nums = [];
  for (let element of input) {
    if (typeof element == "number") {
      nums.push(element);
    } else {
      let secondNum = nums.pop();
      let firstNum = nums.pop();
      if (firstNum == undefined || secondNum == undefined) {
        console.log(`Error: not enough operands!`);
        return;
      }
      if (element == "+") {
        nums.push(firstNum + secondNum);
      } else if (element == "-") {
        nums.push(firstNum - secondNum);
      } else if (element == "/") {
        nums.push(firstNum / secondNum);
      } else if (element == "*") {
        nums.push(firstNum * secondNum);
      }
    }
  }
  if (nums.length > 1) {
    console.log(`Error: too many operands!`);
  } else {
    console.log(nums.join(""));
  }
}
jansNotation([3, 4, "+"]);
