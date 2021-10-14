function subSum(arr, strIndex, endIndex) {
  if (!Array.isArray(arr)) {
    return NaN;
  }

  if (strIndex < 0) {
    strIndex = 0;
  }

  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  return arr
    .slice(strIndex, endIndex + 1)
    .map(Number)
    .reduce((a, b) => a + b);
}
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3 Expected
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // 150 Expected
console.log(subSum([10, "twenty", 30, 40], 0, 2)); // 150 Expected
