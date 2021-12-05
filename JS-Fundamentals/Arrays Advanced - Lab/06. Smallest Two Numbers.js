function smallestTwoNums(arr) {
  let smallest = arr.sort((a, b) => a - b);

  console.log(smallest.slice(0, 2).join(" "));
}

smallestTwoNums([30, 15, 50, 5]);
