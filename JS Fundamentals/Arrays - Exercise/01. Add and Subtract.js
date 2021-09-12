function addNSubtract(array) {
  let oldArraySum = 0;
  let newArraySum = 0;

  for (let i = 0; i < array.length; i++) {
    oldArraySum += array[i];

    if (array[i] % 2 == 0) {
      array[i] += i;
      newArraySum += array[i];
    } else {
      array[i] -= i;
      newArraySum += array[i];
    }
  }

  console.log(array);
  console.log(oldArraySum);
  console.log(newArraySum);
}
// addNSubtract([5, 15, 23, 56, 35]);
addNSubtract([-5, 11, 3, 0, 2]);
