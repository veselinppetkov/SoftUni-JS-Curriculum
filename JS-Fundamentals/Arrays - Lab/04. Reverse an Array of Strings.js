function reverse(array) {
  let m = array.length / 2;
  let k = array.length - 1;

  for (i = 0; i < m; i++) {
    let oldElement = array[i];
    let newElement = k - i;
    array[i] = array[newElement];
    array[newElement] = oldElement;
  }
  console.log(array.join(" "));
}
reverse(["a", "b", "c", "d", "e"]);
reverse(["abc", "def", "hig", "klm", "nop"]);
