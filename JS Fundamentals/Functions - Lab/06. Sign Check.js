function signCheck(numOne, numTwo, numThree) {
  let minusCounter = 0;
  let plusCounter = 0;

  if (numOne < 0) {
    minusCounter++;
  } else {
    plusCounter++;
  }

  if (numTwo < 0) {
    minusCounter++;
  } else {
    plusCounter++;
  }

  if (numThree < 0) {
    minusCounter++;
  } else {
    plusCounter++;
  }

  if ((minusCounter > 1 && minusCounter < 3) || plusCounter > 2) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

signCheck(5, 12, -15);
signCheck(-5, 12, -15);
signCheck(5, 12, 6);
