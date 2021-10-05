function deleteByEmail() {
  let mail = document.getElementsByName(`email`)[0].value;
  let result = document.getElementById(`result`);
  let table = Array.from(document.querySelector(`tbody`).children);
  let removed = false;
  for (let row of table) {
    if (row.children[1].textContent == mail) {
      row.remove();
      removed = true;
    }
  }
  removed
    ? (result.textContent = `Deleted.`)
    : (result.textContent = `Not found.`);
}
