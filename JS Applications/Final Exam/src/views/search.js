import { findSearched } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const searchTemplate = (albums, onSearch) => html`<section id="searchPage">
  <h1>Search by Name</h1>
  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired albums's name"
    />
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
  <div class="search-result">
    ${albums.length == 0
      ? html`<p class="no-result">No result.</p>`
      : albums.map(cardBox)}
  </div>
</section>`;

const cardBox = (card) => html`
  <div class="card-box">
    <img src=${card.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${card.name}</p>
        <p class="artist">Artist: ${card.artist}</p>
        <p class="genre">Genre: ${card.genre}</p>
        <p class="price">Price: ${card.price}</p>
        <p class="date">Release Date: ${card.releaseDate}</p>
      </div>

      ${getUserData()
        ? html`<div class="btn-group">
            <a href="/details/${card._id}" id="details">Details</a>
          </div>`
        : null}
    </div>
  </div>
`;

export async function searchPage(ctx) {
  const params = ctx.querystring.split("=")[1];
  let albums = [];

  if (params) {
    albums = await findSearched(decodeURIComponent(params));
  }

  ctx.render(searchTemplate(albums, onSearch));

  async function onSearch(event) {
    event.preventDefault();
    const searchedItem = document.getElementById(`search-input`).value.trim();

    if (searchedItem == "") {
      return alert(`You must fill the input!`);
    } else {
      ctx.page.redirect(`/search?query=${encodeURIComponent(searchedItem)}`);
    }
  }
}
