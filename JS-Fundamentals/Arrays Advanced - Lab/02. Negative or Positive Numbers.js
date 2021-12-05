function negativeOrPositive(array) {
  let arr = [];

  for (let elements of array) {
    if (Number(elements) < 0) {
      arr.unshift(elements);
    } else {
      arr.push(elements);
    }
  }

  console.log(arr.join("\n"));
}

negativeOrPositive([7, -2, 8, 9]);
