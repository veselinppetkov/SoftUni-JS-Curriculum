function schoolGrades(list) {
  let students = {};

  for (let tokens of list) {
    let [name, ...number] = tokens.split(" ");
    let grades = number.map(Number);

    if (!students.hasOwnProperty(name)) {
      students[name] = [];
    }

    let existing = students[name];
    for (let grade of grades) {
      existing.push(grade);
    }
  }

  let sorted = Object.entries(students);
  sorted.sort(compareAverage);

  for (let [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(", ")}`);
  }

  function compareAverage([nameA, gradesA], [nameB, gradesB]) {
    let avgA = 0;
    gradesA.forEach((x) => (avgA += x));
    avgA /= gradesA.length;

    let avgB = 0;
    gradesB.forEach((x) => (avgB += x));
    avgB /= gradesB.length;

    return avgA - avgB;
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
