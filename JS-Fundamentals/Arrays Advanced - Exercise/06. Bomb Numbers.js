function bombNumbers(array, bombs) {
  let [bomb, power] = bombs;

  while (array.includes(bomb)) {
    let bombIndex = array.indexOf(bomb);
    let startIndex = Math.max(bombIndex - power, 0);
    array.splice(bombIndex, power + 1);
    array.splice(startIndex, power);
  }

  let sum = 0;

  for (let num of array) {
    sum += num;
  }
  return sum;
}

console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
