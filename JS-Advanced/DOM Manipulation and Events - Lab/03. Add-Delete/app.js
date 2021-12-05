function addItem() {
  let typeBox = document.getElementById(`newItemText`);
  let newLi = document.createElement(`li`);
  newLi.textContent = typeBox.value;
  let button = document.createElement(`a`);
  button.textContent = `[Delete]`;
  button.href = "#";

  button.addEventListener("click", onClick);

  function onClick(e) {
    e.target.parentNode.remove();
  }

  newLi.appendChild(button);
  document.querySelector(`ul`).appendChild(newLi);
  typeBox.value = "";
}
