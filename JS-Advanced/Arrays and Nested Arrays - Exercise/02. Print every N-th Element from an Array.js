function print(arr, num) {
  return arr.filter((x, i) => i % num == 0);
}
console.log(print(["5", "20", "31", "4", "20"], 2));
