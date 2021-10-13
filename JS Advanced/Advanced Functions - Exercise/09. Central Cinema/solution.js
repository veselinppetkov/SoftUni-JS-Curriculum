function solve() {
  let inputs = document.querySelectorAll("#container input");
  let clearButton = document.querySelector("#archive button");
  clearButton.addEventListener("click", () => (archiveArea.innerHTML = null));
  let OnScreenButton = document.querySelector("#container button");
  let onScreenMovies = document.querySelector("#movies ul");
  let archiveArea = document.querySelector("#archive ul");
  OnScreenButton.addEventListener("click", add);

  function add(e) {
    e.preventDefault();
    let name = inputs[0];
    let hall = inputs[1];
    let ticketPrice = inputs[inputs.length - 1];
    let toFixed = ticketPrice.value;
    let numberCheck = isNaN(toFixed);
    if (
      name.value != "" &&
      hall.value != "" &&
      numberCheck == false &&
      toFixed != ""
    ) {
      toFixed = Number(toFixed);
      let newLi = document.createElement("li");
      let newDiv = document.createElement("div");
      let newSpan = document.createElement("span");
      let newStrong = document.createElement("strong");
      let newStrong2 = document.createElement("strong");
      let newInput = document.createElement("input");
      let newButton = document.createElement("button");
      newButton.setAttribute("type", "button");

      newSpan.textContent = name.value;
      newStrong.textContent = `Hall: ${hall.value}`;
      newStrong2.textContent = toFixed.toFixed(2);
      newInput.setAttribute("placeholder", "Tickets sold!");
      newButton.textContent = "Archive";

      newDiv.appendChild(newStrong2);
      newDiv.appendChild(newInput);
      newDiv.appendChild(newButton);

      newLi.appendChild(newSpan);
      newLi.appendChild(newStrong);
      newLi.appendChild(newDiv);

      onScreenMovies.appendChild(newLi);
    }
    name.value = "";
    hall.value = "";
    ticketPrice.value = "";

    let archieveButtons = document.querySelectorAll("#movies button");
    Array.from(archieveButtons).forEach((button) =>
      button.addEventListener("click", archieve)
    );
    function archieve(el) {
      let div = el.target.parentNode;
      let information = div.parentNode;
      let strongPrice = div.querySelector("strong").textContent;
      let name = information.querySelector("span").textContent;
      let input = div.querySelector("input");
      let numberOr = isNaN(input.value);
      let result = Number(input.value) * Number(strongPrice);
      if (input.value != "" && numberOr == false) {
        let newLi = document.createElement("li");
        let newspan = document.createElement("span");
        let newStrong = document.createElement("strong");
        let newButton = document.createElement("button");
        newspan.textContent = name;
        newStrong.textContent = `Total amount: ${result.toFixed(2)}`;
        newButton.textContent = "Delete";
        newLi.appendChild(newspan);
        newLi.appendChild(newStrong);
        newLi.appendChild(newButton);
        archiveArea.appendChild(newLi);
        information.remove();
        Array.from(archiveArea.querySelectorAll("button")).forEach((btn) =>
          btn.addEventListener("click", deleter)
        );
      }

      function deleter(el) {
        el.target.parentNode.remove();
      }
    }
  }
}
