function attachEvents() {
  document.getElementById(`btnLoad`).addEventListener("click", loadContacts);
  document.getElementById(`btnCreate`).addEventListener("click", onCreate);

  phonebookUl.addEventListener("click", onDelete);

  loadContacts();
}

const phonebookUl = document.getElementById(`phonebook`);
const personInput = document.getElementById(`person`);
const phoneInput = document.getElementById(`phone`);

attachEvents();

async function loadContacts() {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  const res = await fetch(url);
  const data = await res.json();
  phonebookUl.replaceChildren(...Object.values(data).map(createItem));
}

function createItem(contact) {
  const li = document.createElement(`li`);
  li.textContent = `${contact.person}: ${contact.phone}`;

  const deleteBtn = document.createElement(`button`);
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", `${contact._id}`);

  li.appendChild(deleteBtn);

  return li;
}

async function createContact(contact) {
  const url = `http://localhost:3030/jsonstore/phonebook`;
  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  const result = await res.json();
  return result;
}

async function onCreate() {
  const person = personInput.value.trim();
  const phone = phoneInput.value.trim();
  const contact = { person, phone };

  const result = await createContact(contact);

  phonebookUl.appendChild(createItem(result));
}

async function deleteContact(id) {
  const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
    method: "delete",
  });
  const result = await res.json();
  return result;
}

async function onDelete(event) {
  const id = event.target.dataset.id;
  if (id != undefined) {
    await deleteContact(id);
    event.target.parentNode.remove();
  }
}
