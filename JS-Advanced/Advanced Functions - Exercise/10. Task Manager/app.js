function solve() {
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let addButton = document.getElementById("add");
  let allSections = Array.from(document.querySelectorAll(".wrapper section"));

  addButton.addEventListener("click", creator);

  function creator(button) {
    button.preventDefault();
    let information = button.target.parentNode.parentNode;
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let div = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    if (
      button.target.textContent == "Add" &&
      task.value != "" &&
      description.value != "" &&
      date.value != ""
    ) {
      h3.textContent = task.value;
      p1.textContent = `Description: ${description.value}`;
      p2.textContent = `Due Date: ${date.value}`;
      div.setAttribute("class", "flex");
      button1.textContent = "Start";
      button2.textContent = "Delete";
      button1.setAttribute("class", "green");
      button2.setAttribute("class", "red");
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      div.appendChild(button1);
      div.appendChild(button2);
      article.appendChild(div);
      Array.from(allSections[1].querySelectorAll("div"))[1].appendChild(
        article
      );
    }
    if (button.target.textContent == "Start") {
      information.remove();
      let buttons = Array.from(information.querySelectorAll("div button"));
      buttons[0].textContent = "Delete";
      buttons[0].setAttribute("class", "red");
      buttons[1].textContent = "Finish";
      buttons[1].setAttribute("class", "orange");
      Array.from(allSections[2].querySelectorAll("div"))[1].appendChild(
        information
      );
    } else if (button.target.textContent == "Finish") {
      information.remove();
      information.querySelector("div").remove();
      Array.from(allSections[3].querySelectorAll("div"))[1].appendChild(
        information
      );
    } else if (button.target.textContent == "Delete") {
      information.remove();
    }
    Array.from(document.querySelectorAll("button")).forEach((btn) =>
      btn.addEventListener("click", creator)
    );
  }
}
