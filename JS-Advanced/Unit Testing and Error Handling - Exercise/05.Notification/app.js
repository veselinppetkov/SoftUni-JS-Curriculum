function notify(message) {
  let box = document.querySelector(`#notification`);
  box.textContent = message;
  box.style.display = "block";
  box.addEventListener(`click`, onClick);

  function onClick() {
    box.style.display = "none";
  }
}
