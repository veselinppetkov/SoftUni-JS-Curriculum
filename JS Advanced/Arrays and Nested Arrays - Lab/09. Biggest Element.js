function biggestEls(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr.sort((a, b) => b - a)[0];
}
console.log(
  biggestEls([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
