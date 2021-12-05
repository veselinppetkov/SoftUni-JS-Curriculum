import { html, render } from "./node_modules/lit-html/lit-html.js"; // You must "npm i lit-html" first.

const root = document.getElementById(`root`);
const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const towns = document
    .getElementById(`towns`)
    .value.split(",")
    .map((t) => t.trim());

  const result = townTemplate(towns);
  render(result, root);
  form.reset();
});

const townTemplate = (towns) => html` <ul>
  ${towns.map((t) => html`<li>${t}</li>`)}
</ul>`;
