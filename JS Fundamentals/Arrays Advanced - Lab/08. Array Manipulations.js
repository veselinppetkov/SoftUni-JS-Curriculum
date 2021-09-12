function arrayManipulation(arr) {
  let array = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [command, firstNum, index] = arr[i].split(" ");
    firstNum = Number(firstNum);
    index = Number(index);

    switch (command) {
      case "Add":
        array.push(firstNum);
        break;
      case "Remove":
        array = array.filter((x) => x != firstNum);
        break;
      case "RemoveAt":
        array.splice(firstNum, 1);
        break;
      case "Insert":
        array.splice(index, 0, firstNum);
        break;
    }
  }
  console.log(array.join(" "));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
