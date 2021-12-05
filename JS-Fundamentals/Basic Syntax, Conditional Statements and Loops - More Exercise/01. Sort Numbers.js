function sort(a, b, c) {
  let arr = [a, b, c];
  console.log(arr.sort((a, b) => b - a).join("\n"));
}
sort(-2, 1, 3);
