function colorize() {
  let list = document.querySelectorAll(`table tr`);
  for (let i = 1; i < list.length - 1; i += 2) {
    list[i].style.backgroundColor = "teal";
  }
}
