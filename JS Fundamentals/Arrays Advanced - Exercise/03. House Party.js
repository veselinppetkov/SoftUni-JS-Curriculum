function party(arr) {
  let list = [];

  for (let command of arr) {
    let commands = command.split(" ");

    switch (commands[2]) {
      case "going!":
        if (!list.includes(commands[0])) {
          list.push(commands[0]);
          break;
        } else {
          console.log(`${commands[0]} is already in the list!`);
          break;
        }
      case "not":
        if (list.includes(commands[0])) {
          list = list.filter((guestname) => guestname !== commands[0]);
          break;
        } else {
          console.log(`${commands[0]} is not in the list!`);
          break;
        }
    }
  }
  console.log(list.join("\n"));
}

party([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Garry is not going!",
  "Jerry is going!",
]);
