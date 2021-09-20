function lastK(n, k) {
  let newArr = [1];

  for (let i = newArr.length; i < n; i++) {
    let sum = 0;
    for (let j = newArr.length - k; j < newArr.length; j++) {
      if (j < 0) {
        continue;
      }
      sum += newArr[j];
    }
    newArr.push(sum);
  }
  return newArr;
}

console.log(lastK(6, 3));
console.log(lastK(8, 2));
