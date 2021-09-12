function processOddNums(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      oddArr.push(Number(arr[i] * 2));
    }
  }

  oddArr.reverse();
  console.log(oddArr.join(" "));
}

processOddNums([3, 0, 10, 4, 7, 3]);
