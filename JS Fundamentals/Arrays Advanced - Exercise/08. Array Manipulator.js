function arrManipulator(integers, commands) {
  let actions = {
    add: add,
    addMany: addMany,
    contains: contains,
    remove: remove,
    shift: shift,
    sumPairs: sumPairs,
  };

  let line = commands.shift();

  while (line != "print") {
    let [command, index, element, ...others] = line.split(" ");
    let action = actions[command];
    if (command == "sumPairs") {
      action(integers);
      line = commands.shift();
      continue;
    }
    action(index, element, others);
    line = commands.shift();
  }

  function add(index, element) {
    integers.splice(index, 0, Number(element));
  }
  function addMany(index, element, others) {
    others.unshift(element);
    integers.splice(index, 0, ...others.map(Number));
  }
  function contains(element) {
    console.log(integers.indexOf(Number(element)));
  }
  function remove(index) {
    integers.splice(index, 1);
  }
  function shift(positions) {
    for (let i = 0; i < positions; i++) {
      integers.push(integers.shift());
    }
  }

  function sumPairs(integers) {
    if (integers.length % 2 == 0) {
      for (let i = 0; i < integers.length / 2; i++) {
        integers[i] = integers[i] + integers[i + 1];
      }
      integers.length = integers.length / 2;
    } else {
      let last = integers.pop();
      for (let i = 0; i < integers.length / 2; i++) {
        integers[i] = integers[i] + integers[i + 1];
      }
      integers.length = integers.length / 2;
      integers.push(last);
    }
  }

  console.log(integers);
}

arrManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "shift 3", "print"]
);
