function addItem() {
  let typeBox = document.getElementById(`newItemText`);
  let newLi = document.createElement(`li`);
  newLi.textContent = typeBox.value;
  document.querySelector(`ul`).appendChild(newLi);
  typeBox.value = "";
}
