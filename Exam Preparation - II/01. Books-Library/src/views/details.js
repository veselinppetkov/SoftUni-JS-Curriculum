import { html } from "../lib.js";
import {
  getBookById,
  deleteBookById,
  likeBook,
  getLikes,
  getMyLikes,
} from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (
  book,
  isOwner,
  onDelete,
  likes,
  showLikeBtn,
  onLike
) => html` <section
  id="details-page"
  class="details"
>
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <div class="actions">
      ${
        isOwner
          ? html` <a class="button" href="/edit/${book._id}">Edit</a>
              <a class="button" @click=${onDelete}>Delete</a>`
          : null
      } 
      ${likeControl(showLikeBtn, onLike)}
      
      <div class="likes">
  <img class="hearts" src="/images/heart.png" />
  <span id="total-likes">Likes: ${likes}</span>
</div> 
      
    </div>
  </div>
</section>
</div>
        </div>
        <div class="book-description">
          <h3>Description:</h3>
          <p>${book.description}</p>
        </div>
      </section>`;

const likeControl = (showLikeBtn, onLike) => {
  if (showLikeBtn) {
    return html`<a class="button" href="javascript:void(0)" @click=${onLike}
      >Like</a
    >`;
  } else {
    return null;
  }
};

export async function detailsPage(ctx) {
  const userData = getUserData();

  const [book, likes, hasLiked] = await Promise.all([
    getBookById(ctx.params.id),
    getLikes(ctx.params.id),
    userData ? getMyLikes(ctx.params.id, userData.id) : 0,
  ]);

  const isOwner = userData && userData.id == book._ownerId;
  const showLikeBtn = isOwner == false && hasLiked == false && userData != null;

  ctx.render(
    detailsTemplate(book, isOwner, onDelete, likes, showLikeBtn, onLike)
  );

  async function onDelete() {
    const resp = confirm(`Are you sure you want to delete this book?`);

    if (resp) {
      await deleteBookById(ctx.params.id);
      ctx.page.redirect(`/`);
    }
  }

  async function onLike() {
    await likeBook(ctx.params.id);
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
