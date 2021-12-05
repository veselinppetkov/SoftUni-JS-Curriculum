function create(words) {
  const content = document.getElementById(`content`);
  content.addEventListener("click", onClick);

  for (let word of words) {
    const div = document.createElement(`div`);
    const p = document.createElement(`p`);
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);
  }

  function onClick({ target }) {
    if ((target.tagName = "DIV" && target != content)) {
      target.firstChild.style.display = "";
    }
  }
}
