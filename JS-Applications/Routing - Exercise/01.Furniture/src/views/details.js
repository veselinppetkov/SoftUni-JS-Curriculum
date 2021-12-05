import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteRecord, getItemById } from "../api/data.js";

const detailsTemplate = (item, isOwner, onDelete, confirmed) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${item.img} />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${item.make}</span></p>
      <p>Model: <span>${item.model}</span></p>
      <p>Year: <span>${item.year}</span></p>
      <p>Description: <span>${item.description}</span></p>
      <p>Price: <span>${item.price}</span></p>
      <p>Material: <span>${item.material}</span></p>
      ${isOwner
        ? html`
            <div>
              <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
              <a
                href=${!confirmed ? `/details/${item._id}` : `/`}
                @click=${onDelete}
                class="btn btn-red"
                >Delete</a
              >
            </div>
          `
        : ""}
    </div>
  </div>
`;
let confirmed;
export async function detailsPage(ctx) {
  if (confirmed) {
    confirmed = false;
    return;
  }
  confirmed = false;
  const item = await getItemById(ctx.params.id);
  const userId = sessionStorage.getItem("userId");
  ctx.render(
    detailsTemplate(item, item._ownerId === userId, onDelete, confirmed)
  );

  async function onDelete() {
    confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      await deleteRecord(item._id);
      alert("Item deleted!");
      ctx.page.redirect("/");
    }
    // return;
  }
}
