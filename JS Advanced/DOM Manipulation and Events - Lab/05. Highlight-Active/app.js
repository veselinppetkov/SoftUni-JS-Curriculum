function focused() {
  let boxes = Array.from(document.getElementsByTagName(`input`));
  boxes.forEach((e) => {
    e.addEventListener(
      "focus",
      (ev) => (ev.target.parentNode.className = "focused")
    );
    e.addEventListener("blur", (ev) => (ev.target.parentNode.className = ""));
  });
}
