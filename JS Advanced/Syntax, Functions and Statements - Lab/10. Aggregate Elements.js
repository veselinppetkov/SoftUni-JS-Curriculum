function aggregateEl(arr) {
  console.log(arr.reduce((a, b) => a + b));
  console.log(arr.map((a) => 1 / a).reduce((a, b) => a + b));
  console.log(arr.map(String).join(""));
}
aggregateEl([1, 2, 3]);
aggregateEl([2, 4, 8, 16]);
