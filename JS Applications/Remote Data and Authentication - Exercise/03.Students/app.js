const form = document.getElementById(`form`);
const resultsTable = document.getElementById(`results`);
const submitBtn = document.getElementById(`submit`);
submitBtn.addEventListener("click", onSubmit);

extractStudents();

async function extractStudents() {
  const url = `http://localhost:3030/jsonstore/collections/students`;
  const res = await fetch(url);
  const data = await res.json();

  Object.values(data)
    .map(createStudent)
    .forEach((s) => resultsTable.appendChild(s));
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const firstName = formData.get(`firstName`).trim();
  const lastName = formData.get(`lastName`).trim();
  const facultyNumber = formData.get(`facultyNumber`).trim();
  const grade = formData.get(`grade`).trim();

  try {
    if (
      typeof firstName == "string" &&
      firstName != "" &&
      typeof lastName == "string" &&
      lastName != "" &&
      Number.isInteger(Math.round(facultyNumber)) &&
      Number(facultyNumber) != 0 &&
      Number.isInteger(Math.round(grade)) &&
      Number(grade) != 0
    ) {
      const res = await fetch(
        `http://localhost:3030/jsonstore/collections/students`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
        }
      );
      form.reset();

      const result = await res.json();
      return result;
    } else {
      throw new Error(`Invalid form`);
    }
  } catch (err) {
    alert(err.message);
  }
}

function createStudent(student) {
  const tr = document.createElement(`tr`);

  const firstName = document.createElement(`td`);
  firstName.textContent = student.firstName;
  const lastName = document.createElement(`td`);
  lastName.textContent = student.lastName;
  const facultyNumber = document.createElement(`td`);
  facultyNumber.textContent = student.facultyNumber;
  const grade = document.createElement(`td`);
  grade.textContent = student.grade;

  tr.appendChild(firstName);
  tr.appendChild(lastName);
  tr.appendChild(facultyNumber);
  tr.appendChild(grade);

  return tr;
}
