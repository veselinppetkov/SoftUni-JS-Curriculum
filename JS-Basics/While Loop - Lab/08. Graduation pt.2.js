function graduation(input) {
  let name = input[0];
  let grade = 0;
  let i = 1;
  let classGrade = Number(input[i]);
  let sum = 0;
  let counter = 0;

  while (true) {
    let classGrade = Number(input[i]);
    if (classGrade >= 4) {
      sum += classGrade;
      grade++;
      i++;
    } else {
      counter++;
      grade++;
    }

    if (counter > 1) {
      console.log(`${name} has been excluded at ${grade - 1} grade`);
      break;
    }
    if (grade == 12) {
      console.log(
        `${name} graduated. Average grade: ${(sum / grade).toFixed(2)}`
      );
      break;
    }
  }
}

graduation([
  "Gosho",

  "5",

  "5.5",

  "6",

  "5.43",

  "5.5",

  "6",

  "5.55",

  "5",

  "6",

  "6",

  "5.43",

  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
