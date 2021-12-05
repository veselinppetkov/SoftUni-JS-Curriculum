import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.querySelector(`tbody`);
const searchBtn = document.getElementById(`searchBtn`);
const input = document.getElementById(`searchField`);

searchBtn.addEventListener("click", () => {
  const value = input.value.trim().toLocaleLowerCase();

  for (let student of students) {
    student.match = Object.values(student.item).some(
      (v) => value && v.toLocaleLowerCase().includes(value)
    );
  }

  input.value = "";
  update();
});

const personCard = (student) => html` <tr
  class=${student.match ? "select" : ""}
>
  <td>${student.item.firstName} ${student.item.lastName}</td>
  <td>${student.item.email}</td>
  <td>${student.item.course}</td>
</tr>`;

let students;
getData();

async function getData() {
  const url = `http://localhost:3030/jsonstore/advanced/table`;
  const res = await fetch(url);
  const data = await res.json();

  students = Object.values(data).map((s) => ({ item: s, match: false }));

  update();
}

function update() {
  render(students.map(personCard), root);
}
