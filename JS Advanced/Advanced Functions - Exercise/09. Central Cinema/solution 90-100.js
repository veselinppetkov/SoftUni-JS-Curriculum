function solve() {
  const [nameBox, hallBox, priceBox, onScreenBtn] = Array.from(
    document.getElementById(`container`).children
  );
  const clearBtn = document.getElementById(`archive`).children[2];

  onScreenBtn.addEventListener("click", onClick);
  clearBtn.addEventListener("click", () => (archiveArea.innerHTML = null));

  function onClick(ev) {
    ev.preventDefault();
    if (
      nameBox.value != "" &&
      hallBox.value != "" &&
      priceBox.value != "" &&
      !isNaN(priceBox.value)
    ) {
      const ul = document.querySelector(`ul`);
      const li = document.createElement(`li`);
      const spanInLi = document.createElement(`span`);
      spanInLi.textContent = nameBox.value;
      const strongInLi = document.createElement(`strong`);
      strongInLi.textContent = `Hall: ${hallBox.value}`;
      const divInLi = document.createElement(`div`);
      const strongInDiv = document.createElement(`strong`);
      strongInDiv.textContent = Number(priceBox.value).toFixed(2);
      const inputInDiv = document.createElement(`input`);
      inputInDiv.placeholder = "Tickets Sold";
      const btnInDiv = document.createElement(`button`);
      btnInDiv.textContent = "Archive";
      btnInDiv.addEventListener("click", onArchive);

      li.appendChild(spanInLi);
      li.appendChild(strongInLi);
      divInLi.appendChild(strongInDiv);
      divInLi.appendChild(inputInDiv);
      divInLi.appendChild(btnInDiv);
      li.appendChild(divInLi);
      ul.appendChild(li);

      nameBox.value = "";
      hallBox.value = "";
      priceBox.value = "";
    }
  }
  function onArchive(ev) {
    if (
      !isNaN(
        document.querySelector(`input[placeholder="Tickets Sold"]`).value
      ) &&
      document.querySelector(`input[placeholder="Tickets Sold"]`).value != ""
    ) {
      const ul = document.querySelector(`#archive ul`);
      const li = document.createElement(`li`);
      const spanInLi = document.createElement(`span`);
      spanInLi.textContent =
        ev.target.parentNode.parentNode.querySelector(`span`).textContent;
      const strongInLi = document.createElement(`strong`);
      strongInLi.textContent = `Total amount: ${(
        Number(
          ev.target.parentNode.parentNode.querySelector(
            `input[placeholder="Tickets Sold"]`
          ).value
        ) *
        Number(
          ev.target.parentNode.parentNode.querySelector(`div strong`)
            .textContent
        )
      ).toFixed(2)}`;
      const btnInLi = document.createElement(`button`);
      btnInLi.textContent = "Delete";
      btnInLi.addEventListener(`click`, onDelete);
      li.appendChild(spanInLi);
      li.appendChild(strongInLi);
      li.appendChild(btnInLi);
      ul.appendChild(li);
    }
  }
  function onDelete(ev) {
    ev.target.parentNode.remove();
  }
}
