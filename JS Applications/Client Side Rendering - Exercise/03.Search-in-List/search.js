import { html, render } from "./node_modules/lit-html/lit-html.js"; // You must "npm i lit-html" first.
import { towns as townData } from "./towns.js";
const towns = townData.map((t) => ({ name: t, match: false }));

const searchBtn = document.querySelector(`button`);
const inputField = document.getElementById(`searchText`);
const outputField = document.getElementById(`result`);
const root = document.getElementById(`towns`);

const townTemplate = (towns) => html` <ul>
  ${towns.map(
    (t) => html` <li class=${t.match ? "active" : "none"}>${t.name}</li>`
  )}
</ul>`;

update();

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const match = inputField.value.trim().toLocaleLowerCase();
  let matches = 0;

  for (let town of towns) {
    if (match && town.name.trim().toLocaleLowerCase().includes(match)) {
      town.match = true;
      matches++;
    } else {
      town.match = false;
    }
  }

  outputField.textContent = `${matches} matches found`;

  update();
});

function update() {
  render(townTemplate(towns), root);
}
