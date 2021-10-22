function solve() {
  const [name, age, kind, owner] =
    document.querySelectorAll(`#container input`);
  const addBtn = document.querySelector(`#container button`);
  addBtn.addEventListener("click", onClick);
  const adoptionField = document.querySelector(`#adoption ul`);
  const adoptedField = document.querySelector(`#adopted ul`);

  function onClick(event) {
    event.preventDefault();
    if (
      name.value.trim() &&
      age.value.trim() &&
      !Number.isNaN(Number(age.value)) &&
      kind.value.trim() &&
      owner.value.trim()
    ) {
      const contactBtn = createElement(`button`, {}, `Contact with owner`);
      const pet = createElement(
        "li",
        {},
        createElement(
          "p",
          {},
          createElement("strong", {}, name.value),
          ` is a `,
          createElement("strong", {}, age.value),
          " year old ",
          createElement("strong", {}, kind.value)
        ),
        createElement("span", {}, `Owner: ${owner.value}`),
        contactBtn
      );

      contactBtn.addEventListener("click", onContact);

      adoptionField.appendChild(pet);

      document.querySelector(`form`).reset()

      function onContact () {
        const confirmInput = createElement("input",{placeholder = "Enter your names"})
        const confirmBtn = createElement("button",{}, `Yes! I take it!` )
        const confirmationDiv = createElement("div",{}, confirmInput, confirmBtn
        )
  
        confirmBtn.addEventListener("click", () => {})
        confirmBtn.remove()
  
        pet.appendChild(confirmationDiv)
  
    }
    }
  }


  function createElement(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
      element[prop] == attr[prop];
    }
    for (let item of content) {
      if (typeof item === "string" || typeof item === "number") {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

