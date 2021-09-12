function addnRemove(arr) {
  let newArr = [];
  let number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "add") {
      number++;
      newArr.push(number);
    } else {
      number++;
      newArr.pop();
    }
  }

  if (newArr.length > 0) {
    console.log(newArr.join(" "));
  } else {
    console.log(`Empty`);
  }
}
addnRemove(["add", "add", "add", "add"]);
addnRemove(["add", "add", "remove", "add", "add"]);
addnRemove(["remove", "remove", "remove"]);
