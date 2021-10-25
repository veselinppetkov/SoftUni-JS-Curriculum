window.addEventListener("load", solve);

function solve() {
  const genre = document.getElementById(`genre`);
  const name = document.getElementById(`name`);
  const author = document.getElementById(`author`);
  const date = document.getElementById(`date`);
  const collectionDiv = document.querySelector(`.all-hits-container`);
  const savedDiv = document.querySelector(`.saved-container`);

  const addBtn = document.getElementById(`add-btn`);
  addBtn.addEventListener("click", onClick);

  function onClick(event) {
    event.preventDefault();
    if (
      genre.value.trim() == "" ||
      name.value.trim() == "" ||
      author.value.trim() == "" ||
      date.value.trim() == ""
    ) {
      return;
    }

    let mainDiv = document.createElement(`div`);
    mainDiv.className = "hits-info";
    let img = document.createElement(`img`);
    img.src = "./static/img/img.png";
    let genreH2 = createElement("h2", {}, `Genre: ${genre.value}`);
    let nameH2 = createElement("h2", {}, `Name: ${name.value}`);
    let authorH2 = createElement("h2", {}, `Author: ${author.value}`);
    let dateH3 = createElement("h3", {}, `Date: ${date.value}`);
    let saveBtn = createElement("button", {}, `Save song`);
    saveBtn.className = "save-btn";
    saveBtn.addEventListener("click", () => {
      saveBtn.remove();
      likeBtn.remove();
      savedDiv.appendChild(mainDiv);
    });
    let likeBtn = createElement("button", {}, `Like song`);
    likeBtn.className = "like-btn";
    likeBtn.addEventListener("click", () => {
      let currentLikes = Number(
        document.querySelector(`#total-likes div p`).textContent.slice(13)
      );
      document.querySelector(
        `#total-likes div p`
      ).textContent = `Total Likes: ${++currentLikes}`;
      likeBtn.disabled = true;
    });
    let deleteBtn = createElement("button", {}, `Delete`);
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });

    mainDiv.appendChild(img);
    mainDiv.appendChild(genreH2);
    mainDiv.appendChild(nameH2);
    mainDiv.appendChild(authorH2);
    mainDiv.appendChild(dateH3);
    mainDiv.appendChild(saveBtn);
    mainDiv.appendChild(likeBtn);
    mainDiv.appendChild(deleteBtn);

    collectionDiv.appendChild(mainDiv);

    name.value = "";
    genre.value = "";
    author.value = "";
    date.value = "";
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
