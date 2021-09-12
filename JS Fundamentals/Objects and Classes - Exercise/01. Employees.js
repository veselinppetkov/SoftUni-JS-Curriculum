function employees(arr) {
  for (let person of arr) {
    let employee = {
      name: person,
      personalNum: person.length,
    };

    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNum}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
