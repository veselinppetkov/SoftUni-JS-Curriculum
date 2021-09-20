function smallestTwo(arr) {
  let sorted = arr.sort((a, b) => a - b);
  sorted.length = 2;
  console.log(sorted.join(" "));
}
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
