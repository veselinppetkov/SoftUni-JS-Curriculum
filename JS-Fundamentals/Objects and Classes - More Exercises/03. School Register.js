function register(arr) {
  let register = {};

  for (let el of arr) {
    el = el.split(" ");
    let name = el[2].replace(",", "");
    let grade = Number(el[4].replace(",", "")) + 1;
    let score = Number(el[10].replace(",", ""));

    if (score > 3) {
      let student = { name, score };
      if (!register.hasOwnProperty(grade)) {
        register[grade] = [];
      }
      register[grade].push(student);
    }
  }
  let sortedGrades = Object.keys(register).sort((a, b) => a - b);

  for (let grade of sortedGrades) {
    let students = register[grade];
    console.log("");
    console.log(`${grade} Grade`);
    console.log(`List of students: ${students.map((a) => a.name).join(", ")}`);
    console.log(
      `Average annual grade from last year: ${average(
        students.map((a) => a.score)
      ).toFixed(2)}`
    );
  }

  function average(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }
}
register([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
