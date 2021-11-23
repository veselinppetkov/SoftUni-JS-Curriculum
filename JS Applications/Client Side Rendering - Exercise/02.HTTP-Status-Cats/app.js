import { html, render } from "./node_modules/lit-html/lit-html.js"; // You must "npm i lit-html" first.
import { cats as catData } from "./catSeeder.js";
catData.forEach((c) => (c.info = false));

const section = document.getElementById(`allCats`);

const catTemplate = (cats) => html`
  <ul>
    ${cats.map(
      (c) => html` <li>
        <img
          src="./images/${c.imageLocation}.jpg"
          width="250"
          height="250"
          alt="Card image cap"
        />
        <div class="info">
          <button @click=${() => toggleInfo(c)} class="showBtn">
            ${c.info ? "Hide" : "Show"} status code
          </button>
          ${c.info
            ? html`<div class="status" id="${c.id}">
                <h4>Status Code: ${c.statusCode}</h4>
                <p>${c.statusMessage}</p>
              </div>`
            : null}
        </div>
      </li>`
    )}
  </ul>
`;

update();

function toggleInfo(cat) {
  cat.info = !cat.info;
  update();
}

function update() {
  render(catTemplate(catData), section);
}
