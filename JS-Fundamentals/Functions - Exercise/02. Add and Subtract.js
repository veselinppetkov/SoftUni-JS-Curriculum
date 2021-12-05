function addNSubtract(firstNum, secondNum, thirdNum) {
  let numSum = add(firstNum, secondNum);
  let numSubtract = subtract(numSum, thirdNum);
  return numSubtract;

  function add(firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result;
  }

  function subtract(firstNum, secondNum) {
    let result = firstNum - secondNum;
    return result;
  }
}
console.log(addNSubtract(15, 2, 0));
