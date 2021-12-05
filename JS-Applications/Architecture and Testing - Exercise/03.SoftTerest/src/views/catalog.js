import { e } from "../dom.js";
import { getAllIdeas } from "../api/data.js";

const section = document.getElementById(`dashboard-holder`);
section.remove();
section.addEventListener("click", onDetails);
let ctx = null;

export async function showCatalogPage(ctxTarget, id) {
  ctx = ctxTarget;
  ctx.showSection(section);
  loadIdeas(id);
}

async function loadIdeas() {
  const ideas = await getAllIdeas();

  if (ideas.length == 0) {
    section.replaceChildren(e(`h1`, {}, "No ideas yet! Be the first one :)"));
  } else {
    const fragment = document.createDocumentFragment();

    ideas.map(createIdeaCard).forEach((i) => fragment.appendChild(i));

    section.replaceChildren(fragment);
  }
}

function createIdeaCard(idea) {
  const div = e(`div`, {
    className: "card overflow-hidden current-card details",
  });
  div.style.width = "20rem";
  div.style.height = "18rem";

  div.appendChild(
    e(
      `div`,
      { className: "card-body" },
      e(`p`, { className: "card-text" }, idea.title)
    )
  );
  div.appendChild(
    e(`img`, { className: "card-image", src: idea.img, alt: "Card image cap" })
  );
  div.appendChild(
    e(`a`, { className: "btn", href: "#", id: idea._id }, "Details")
  );

  return div;
}

function onDetails(event) {
  if (event.target.tagName == "A") {
    event.preventDefault();
    const id = event.target.id;
    ctx.goTo(`details`, id);
  }
}
