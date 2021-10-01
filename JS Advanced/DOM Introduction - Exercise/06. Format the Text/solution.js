function solve() {
  let inputArea = document.querySelector(`#input`);
  let outputArea = document.querySelector(`#output`);
  let splitted = inputArea.value
    .split(".")
    .filter((x) => x.length > 0)
    .map((x) => x.trim());

  let paragraphRoof = Math.ceil(splitted.length / 3);

  for (let i = 0; i < paragraphRoof; i++) {
    outputArea.innerHTML += `<p>${splitted.splice(0, 3)}.</p>`;
  }
}
