function subsequence(arr) {
  let biggestNum = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= biggestNum) {
      newArr.push(arr[i]);
      biggestNum = arr[i];
    }
  }
  console.log(newArr.join(" "));
}
subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
subsequence([1, 2, 3, 4]);
subsequence([20, 3, 2, 15, 6, 1]);
