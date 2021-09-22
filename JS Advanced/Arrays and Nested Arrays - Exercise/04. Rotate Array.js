function rotate(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
rotate(["1", "2", "3", "4"], 2);
rotate(["Banana", "Orange", "Coconut", "Apple"], 15);
