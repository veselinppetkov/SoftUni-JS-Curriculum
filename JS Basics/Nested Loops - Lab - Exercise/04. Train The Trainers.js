function trainers(input) {
  let i = 0;
  let grades = Number(input[i++]);
  let line = input[i++];

  let counter = 0;
  let avrGrade = 0;

  while (line != "Finish") {
    counter++;
    let presName = line;
    let tempAvrGrade = 0;
    for (let j = 0; j < grades; j++) {
      let tempGrade = Number(input[i++]);
      tempAvrGrade += tempGrade;
    }
    tempAvrGrade = tempAvrGrade / grades;
    console.log(`${presName} - ${tempAvrGrade.toFixed(2)}.`);
    avrGrade += tempAvrGrade;
    line = input[i++];
  }
  avrGrade /= counter;
  console.log(`Student's final assessment is ${avrGrade.toFixed(2)}.`);
}

trainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
