function sameNums(num) {
  let isSame = false;
  let sum = 0;
  num = num.toString().split("");

  if (num.length == 1) {
    isSame = true;
  }

  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] == num[i + 1]) {
      isSame = true;
    } else {
      isSame = false;
      break;
    }
  }
  console.log(isSame);
  console.log(num.map(Number).reduce((a, b) => a + b));
}
sameNums(2222222);
sameNums(1);
sameNums(1234);
