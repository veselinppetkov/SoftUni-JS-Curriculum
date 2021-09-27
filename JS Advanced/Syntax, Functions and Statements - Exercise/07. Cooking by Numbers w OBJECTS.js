function cooking(starting, comm1, comm2, comm3, comm4, comm5) {
  let commandsArr = [comm1, comm2, comm3, comm4, comm5];
  starting = Number(starting);

  let commandsObj = {
    starting,
    chop() {
      commandsObj.starting /= 2;
      console.log(commandsObj.starting);
    },
    dice() {
      commandsObj.starting = Math.sqrt(commandsObj.starting);
      console.log(commandsObj.starting);
    },
    spice() {
      commandsObj.starting++;
      console.log(commandsObj.starting);
    },
    bake() {
      commandsObj.starting *= 3;
      console.log(commandsObj.starting);
    },
    fillet() {
      commandsObj.starting *= 0.8;
      console.log(commandsObj.starting.toFixed(1));
    },
  };

  for (let command of commandsArr) {
    commandsObj[command]();
  }
}
cooking("32", "chop", "chop", "chop", "chop", "chop");
// cooking("9", "dice", "spice", "chop", "bake", "fillet");
