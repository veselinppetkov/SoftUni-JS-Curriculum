import { html, render } from "./node_modules/lit-html/lit-html.js"; // You must "npm i lit-html" first.
const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
const root = document.querySelector(`div`);
const form = document.querySelector(`form`);

form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  const text = document.getElementById(`itemText`).value.trim();

  if (text != "") {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  } else {
    alert(`Field must not be empty!`);
  }

  getData();
  form.reset();
});

const optionTemplate = (options) => html`
  <select id="menu">
    ${options.map((o) => html`<option value="${o._id}">${o.text}</option> `)}
  </select>
`;

function update(items) {
  render(optionTemplate(items), root);
}

async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  update(Object.values(data));
}

getData();
