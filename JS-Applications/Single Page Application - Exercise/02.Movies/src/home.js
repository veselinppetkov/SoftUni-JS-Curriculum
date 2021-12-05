import { e, showView } from "./dom.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";

const section = document.getElementById(`home-page`);
const catalog = document.querySelector(
  `.card-deck.d-flex.justify-content-center`
);
const userData = JSON.parse(localStorage.getItem(`userData`));
const addMovie = document.getElementById(`createLink`);

if (userData == null) {
  addMovie.hidden = true;
} else {
  addMovie.hidden = false;
}

addMovie.addEventListener(`click`, (event) => {
  event.preventDefault();
  showCreate();
});
catalog.addEventListener(`click`, (event) => {
  event.preventDefault();
  let target = event.target;

  if (target.tagName == "BUTTON") {
    target = target.parentNode;
  }
  if (target.tagName == "A") {
    const id = target.id;
    showDetails(id);
  }
});

section.remove();

export function showHome() {
  showView(section);
  getMovies();
}

async function getMovies() {
  catalog.replaceChildren(e("p", {}, `Loading...`));
  const url = `http://localhost:3030/data/movies `;

  const res = await fetch(url);
  const data = await res.json();

  catalog.replaceChildren(...data.map(createMovieCard));
}

export function createMovieCard(movie) {
  const element = e(
    `div`,
    { className: "card mb-4" },
    e("img", {
      className: "card-img-top",
      src: `${movie.img}`,
      alt: "Card image cap",
      width: "400",
    }),
    e(
      `div`,
      { className: "card-body" },
      e(`h4`, { className: "card-title" }, `${movie.title}`)
    ),
    e(
      `div`,
      { className: "card-footer" },
      e(
        "a",
        { id: `${movie._id}`, href: "#" },
        e(`button`, { type: "button", className: "btn btn-info" }, "Details")
      )
    )
  );

  return element;
}
