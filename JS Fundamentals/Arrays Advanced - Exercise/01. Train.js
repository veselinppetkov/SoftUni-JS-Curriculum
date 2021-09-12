function train(arr) {
  let wagonsNum = arr.shift().split(" ").map(Number);
  let capacity = Number(arr.shift());

  for (let elements of arr) {
    let commands = elements.split(" ");
    if (commands[0] == "Add") {
      wagonsNum.push(Number(commands[1]));
    } else {
      for (let i = 0; i < wagonsNum.length; i++) {
        if (Number(commands[0]) + wagonsNum[i] <= capacity) {
          wagonsNum[i] += Number(commands[0]);
          break;
        }
      }
    }
  }
  console.log(wagonsNum.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
