function search() {
  let searchBox = document.querySelector(`#searchText`);
  let townsList = Array.from(document.querySelectorAll(`#towns li`));
  let result = document.querySelector(`#result`);

  townsList.forEach((el) => {
    el.style.textDecoration = "none";
    el.style.fontWeight = "normal";
  });

  let targetList = townsList
    .filter((x) => x.textContent.includes(searchBox.value))
    .map((x) => {
      x.style.textDecoration = "underline";
      x.style.fontWeight = "bold";
    });

  result.textContent = `${targetList.length} matches found`;
}
