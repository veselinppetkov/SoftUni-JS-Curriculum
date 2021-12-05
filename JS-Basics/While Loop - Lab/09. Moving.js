function moving(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);
  let space = w * l * h;
  let i = 3;
  let boxes = Number(input[i]);
  let command = input[i];
  let boxesSum = 0;

  while (command != "Done") {
    let boxes = Number(input[i]);
    boxesSum += boxes;
    i++;
    command = input[i];

    if (space < boxesSum) {
      console.log(
        `No more free space! You need ${boxesSum - space} Cubic meters more.`
      );
      break;
    }
  }
  if (space > boxesSum) {
    console.log(`${space - boxesSum} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
