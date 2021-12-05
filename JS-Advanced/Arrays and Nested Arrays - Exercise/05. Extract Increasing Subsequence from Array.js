function extract(input) {
  let newArr = [];
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    if (maxNum <= input[i]) {
      newArr.push(input[i]);
      maxNum = Number(input[i]);
    }
  }
  return newArr;
}
