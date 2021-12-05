import { html, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const root = document.getElementById(`contacts`);

root.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    const div = event.target.parentNode.querySelector(`.details`);
    const btnName = event.target;

    if (div.style.display == "block") {
      div.style.display = "";
      btnName.textContent = "Details";
    } else {
      div.style.display = "block";
      btnName.textContent = "Hide";
    }
  }
});

const personTemplate = (person) => html` <div class="contact card">
  <div>
    <i class="far fa-user-circle gravatar"></i>
  </div>
  <div class="info">
    <h2>${person.name}</h2>
    <button class="detailsBtn">Details</button>
    <div class="details" id="${person.id} style">
      <p>Phone number: ${person.phoneNumber}</p>
      <p>Email: ${person.email}</p>
    </div>
  </div>
</div>`;

render(contacts.map(personTemplate), root);
