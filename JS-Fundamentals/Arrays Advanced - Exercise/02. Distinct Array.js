function distinctArr(arr) {
  let newArr = [];

  for (let digits of arr) {
    if (!newArr.includes(digits)) {
      newArr.push(digits);
    }
  }
  return newArr.join(" ");
}

console.log(distinctArr([1, 2, 3, 4, 3]));
