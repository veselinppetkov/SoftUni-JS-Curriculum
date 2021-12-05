function addNRemove(arr) {
  let newArr = [];
  let addSum = 0;
  for (let command of arr) {
    if (command == "add") {
      addSum++;
      newArr.push(addSum);
    } else if (command == "remove") {
      newArr.pop();
      addSum++;
    }
  }
  if (newArr.length > 0) {
    console.log(newArr.join("\n"));
  } else {
    console.log(`Empty`);
  }
}
addNRemove(["add", "add", "add", "add"]);
addNRemove(["add", "add", "remove", "add", "add"]);
addNRemove(["remove"]);
