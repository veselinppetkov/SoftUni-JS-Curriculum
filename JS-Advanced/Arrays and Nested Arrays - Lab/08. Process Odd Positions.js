function oddPositions(arr) {
  return arr
    .filter((x, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}
console.log(oddPositions([10, 15, 20, 25]));
