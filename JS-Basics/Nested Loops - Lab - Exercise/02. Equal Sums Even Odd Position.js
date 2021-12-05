function solve(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let print = "";

  for (let i = startNum; i <= endNum; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j <= currentNum.length; j++) {
      let digit = Number(currentNum.charAt(j));
      if (j % 2 == 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    if (evenSum == oddSum) {
      print += `${i} `;
    }
  }
  console.log(print);
}
solve(["100000", "100050"]);
