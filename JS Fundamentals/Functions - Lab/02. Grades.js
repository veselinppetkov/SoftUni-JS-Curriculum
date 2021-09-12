function grades(grade) {
  let result;

  if (grade < 3) {
    console.log(`Fail (2)`);
    return;
  }

  if (grade >= 3 && grade < 3.5) {
    result = `Poor`;
  } else if (grade >= 3.5 && grade < 4.5) {
    result = `Good`;
  } else if (grade >= 4.5 && grade < 5.5) {
    result = `Very good`;
  } else {
    result = `Excellent`;
  }

  console.log(`${result} (${grade.toFixed(2)})`);
}
grades(5.75);
grades(4.5);
grades(2.99);
