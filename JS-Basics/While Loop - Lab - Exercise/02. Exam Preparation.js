function exam(input) {
  let limit = Number(input[0]);
  i = 1;
  let exercise = input[i++];
  let grade = Number(input[i]);
  let gCount = 0;
  let bgCount = 0;
  let gradesSum = 0;
  let lastExercise = "";

  while (exercise !== "Enough") {
    if (grade > 4) {
      gCount++;
      gradesSum += grade;
      lastExercise = exercise;
    } else {
      gradesSum += grade;
      gCount++;
      bgCount++;
      lastExercise = exercise;
    }
    i++;
    exercise = input[i++];
    grade = Number(input[i]);

    if (bgCount >= limit) {
      console.log(`You need a break, ${limit} poor grades.`);
      return;
    }
  }
  console.log(`Average score: ${(gradesSum / gCount).toFixed(2)}`);
  console.log(`Number of problems: ${gCount}`);
  console.log(`Last problem: ${lastExercise}`);
}

exam(["4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough"]);
