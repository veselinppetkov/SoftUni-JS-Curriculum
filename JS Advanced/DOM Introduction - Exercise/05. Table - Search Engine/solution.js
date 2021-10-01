function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchField = document.getElementById(`searchField`);
    let table = Array.from(document.querySelectorAll(`tbody tr`));

    table.forEach((element) => {
      element.className = "";
    });

    table.filter((element) => {
      let values = Array.from(element.children);
      if (values.some((td) => td.textContent.includes(searchField.value))) {
        element.className = "select";
      }
    });
    searchField.value = "";
  }
}
