function cooking(starting, comm1, comm2, comm3, comm4, comm5) {
  let commandsArr = [comm1, comm2, comm3, comm4, comm5];
  starting = Number(starting);

  for (let command of commandsArr) {
    if (command == "chop") {
      starting /= 2;
      console.log(starting);
    } else if (command == "dice") {
      starting = Math.sqrt(starting);
      console.log(starting);
    } else if (command == "spice") {
      starting++;
      console.log(starting);
    } else if (command == "bake") {
      starting *= 3;
      console.log(starting);
    } else if (command == "fillet") {
      starting *= 0.8;
      console.log(starting.toFixed(1));
    }
  }
}
// cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");
