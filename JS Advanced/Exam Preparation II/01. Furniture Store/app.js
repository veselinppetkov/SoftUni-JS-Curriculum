window.addEventListener("load", solve);

function solve() {
  const [model, year, price] = document.querySelectorAll(`form input`);
  const description = document.getElementById(`description`);
  const addBtn = document.getElementById(`add`);
  addBtn.addEventListener("click", add);
  const furnitureList = document.getElementById(`furniture-list`);
  const totalPrice = document.querySelector(`.total-price`);
  let totalP = 0;

  function add(event) {
    event.preventDefault();
    if (
      model.value == "" ||
      description.value == "" ||
      year.value == "" ||
      year.value < 0 ||
      price.value == "" ||
      price.value < 0
    ) {
      return;
    }

    let trInfo = document.createElement(`tr`);
    trInfo.className = "info";
    let td1 = createElement("td", {}, model.value);
    let td2 = createElement("td", {}, Math.round(price.value).toFixed(2));
    let td3 = document.createElement(`td`);
    let moreInfoBtn = createElement("button", {}, "More Info");
    moreInfoBtn.className = "moreBtn";
    moreInfoBtn.addEventListener("click", () => {
      if (moreInfoBtn.textContent == "More Info") {
        moreInfoBtn.textContent = "Less Info";
        trHide.style.display = "contents";
      } else {
        moreInfoBtn.textContent = "More Info";
        trHide.style.display = "none";
      }
    });
    let buyItBtn = createElement("button", {}, "Buy it");
    buyItBtn.className = "buyBtn";
    buyItBtn.addEventListener("click", (event) => {
      totalP += Number(
        event.target.parentNode.parentNode.querySelectorAll(`td`)[1].textContent
      );
      event.target.parentNode.parentNode.remove();
      totalPrice.textContent = totalP.toFixed(2);
    });
    let trHide = document.createElement(`tr`);
    trHide.className = "hide";
    let td4 = createElement("td", {}, `Year: ${year.value}`);
    let td5 = createElement("td", {}, `Description: ${description.value}`);
    td5.colSpan = "3";

    trInfo.appendChild(td1);
    trInfo.appendChild(td2);
    td3.appendChild(moreInfoBtn);
    td3.appendChild(buyItBtn);
    trInfo.appendChild(td3);

    trHide.appendChild(td4);
    trHide.appendChild(td5);

    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(trHide);

    model.value = "";
    description.value = "";
    year.value = "";
    price.value = "";
  }

  function moreInfo(event) {}

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
