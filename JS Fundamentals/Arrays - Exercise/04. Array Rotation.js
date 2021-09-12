function arrayRotation(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    let firstElement = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    let lastIndex = array.length - 1;
    array[lastIndex] = firstElement;
  }
  console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// // arrayRotation([51, 47, 32, 61, 21], 2);
