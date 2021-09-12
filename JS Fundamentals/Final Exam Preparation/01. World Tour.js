function worldTour(arr) {
  let inStr = arr.shift();
  let line = arr.shift().split(":");

  let actions = {
    "Add Stop": addStop,
    "Remove Stop": removeStop,
    Switch: swap,
  };

  while (line != "Travel") {
    let command = actions[line[0]];
    let first = line[1];
    let second = line[2];
    command(first, second);
    line = arr.shift().split(":");
  }

  function addStop(index, string) {
    index = Number(index);
    if (validate(index)) {
      let left = inStr.slice(0, index);
      let right = inStr.slice(index);
      inStr = left + string + right;
    }
    console.log(inStr);
  }

  function removeStop(start, end) {
    start = Number(start);
    end = Number(end);
    if (validate(start) && validate(end)) {
      let left = inStr.slice(0, start);
      let right = inStr.slice(end + 1);
      inStr = left + right;
    }
    console.log(inStr);
  }

  function swap(oldStr, newStr) {
    let pattern = new RegExp(oldStr, "g");
    inStr = inStr.replace(pattern, newStr);
    console.log(inStr);
  }

  function validate(index) {
    return index >= 0 && index < inStr.length;
  }
  console.log(`Ready for world tour! Planned stops: ${inStr}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
