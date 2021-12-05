const resultTable = document.querySelector(`tbody`);
const createForm = document.getElementById(`create-form`);
const editForm = document.getElementById(`edit-form`);
resultTable.addEventListener("click", onTableClick);
document.getElementById(`loadBooks`).addEventListener("click", onLoad);
createForm.addEventListener("submit", createBook);
editForm.addEventListener("submit", onEditSubmit);

onLoad();

async function onLoad() {
  const res = await fetch(`http://localhost:3030/jsonstore/collections/books`);
  const data = await res.json();

  resultTable.replaceChildren(
    ...Object.entries(data).map(([id, book]) => createRow(id, book))
  );
}

function onTableClick(ev) {
  if (ev.target.className == "delete") {
    onDelete(ev.target);
  } else if (ev.target.className == "edit") {
    onEdit(ev.target);
  }
}

async function onEditSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const id = formData.get("id").trim();
  const title = formData.get("title").trim();
  const author = formData.get("author").trim();

  await updateBook(id, { title, author });

  event.target.reset();
  createForm.style.display = "block";
  editForm.style.display = "none";

  onLoad();
}

async function onDelete(button) {
  const id = button.parentNode.dataset.id;
  await deleteBook(id);
  button.parentNode.parentNode.remove();
}

async function onEdit(button) {
  const id = button.parentNode.dataset.id;
  const book = await loadBookById(id);

  createForm.style.display = "none";
  editForm.style.display = "block";

  editForm.querySelector(`[name="id"]`).value = id;
  editForm.querySelector(`[name="author"]`).value = book.author;
  editForm.querySelector(`[name="title"]`).value = book.title;
}

async function loadBookById(id) {
  const res = await fetch(
    `http://localhost:3030/jsonstore/collections/books/${id}`
  );
  const book = await res.json();
  return book;
}

async function createBook(event) {
  event.preventDefault();
  const url = `http://localhost:3030/jsonstore/collections/books`;

  const formData = new FormData(event.target);

  const title = formData.get("title").trim();
  const author = formData.get("author").trim();

  if (title != "" && author != "") {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });

    const result = await res.json();
    resultTable.appendChild(createRow(result._id, result));
    event.target.reset();
  } else {
    const error = await res.json();
    alert(error.message);
    throw new Error(error.message);
  }
}

async function updateBook(id, book) {
  const result = await fetch(
    `http://localhost:3030/jsonstore/collections/books/` + id,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }
  );

  return result;
}

async function deleteBook(id) {
  const res = await fetch(
    `http://localhost:3030/jsonstore/collections/books/${id}`,
    {
      method: "delete",
    }
  );

  const result = await res.json();
  return result;
}

function createRow(id, book) {
  const tr = document.createElement(`tr`);

  const titleTd = document.createElement(`td`);
  titleTd.textContent = book.title;

  const authorTd = document.createElement(`td`);
  authorTd.textContent = book.author;

  tr.appendChild(titleTd);
  tr.appendChild(authorTd);

  const btnTd = document.createElement(`td`);
  btnTd.setAttribute("data-id", `${id}`);
  const edinBtn = document.createElement(`button`);
  edinBtn.textContent = "Edit";
  edinBtn.setAttribute("class", `edit`);
  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("class", `delete`);

  btnTd.appendChild(edinBtn);
  btnTd.appendChild(deleteBtn);

  tr.appendChild(btnTd);

  return tr;
}
