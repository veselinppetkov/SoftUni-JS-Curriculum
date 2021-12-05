function amazingNum(num) {
  let numToString = num.toString();
  let sum = 0;
  let hasNine = false;

  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }

  sum = sum.toString();

  for (let j = 0; j < sum.length; j++) {
    if (sum[j] == "9") {
      hasNine = true;
      break;
    }
  }
  console.log(`${num} Amazing? ${hasNine ? "True" : "False"}`);
}
amazingNum(1233);
amazingNum(999);
