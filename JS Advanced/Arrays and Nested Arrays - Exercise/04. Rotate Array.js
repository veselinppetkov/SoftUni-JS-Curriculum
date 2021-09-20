function rotate(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    let spliced = arr.splice(arr.length - 1, 1).join("");
    arr.unshift(spliced);
  }
  console.log(arr.join(" "));
}
rotate(["1", "2", "3", "4"], 2);
rotate(["Banana", "Orange", "Coconut", "Apple"], 15);
