function solve() {
  let [genArea, buyArea] = document.querySelectorAll(`textArea`);
  let [genBtn, buyBtn] = document.querySelectorAll(`button`);

  genBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", summarize);

  function generate(ev) {
    const data = JSON.parse(genArea.value);
    for (let object in data) {
      const row = document.createElement(`tr`);

      const imgTd = document.createElement(`td`);
      const nameTd = document.createElement(`td`);
      const priceTd = document.createElement(`td`);
      const decFactorTd = document.createElement(`td`);
      const markTd = document.createElement(`td`);

      const img = document.createElement(`img`);
      img.src = data[object].img;
      imgTd.appendChild(img);

      const name = document.createElement(`p`);
      name.textContent = data[object].name;
      nameTd.appendChild(name);
      const price = document.createElement(`p`);
      price.textContent = data[object].price;
      priceTd.appendChild(price);
      const decFactor = document.createElement(`p`);
      decFactor.textContent = data[object].decFactor;
      decFactorTd.appendChild(decFactor);
      const mark = document.createElement(`input`);
      mark.type = "checkbox";
      markTd.appendChild(mark);

      row.appendChild(imgTd);
      row.appendChild(nameTd);
      row.appendChild(priceTd);
      row.appendChild(decFactorTd);
      row.appendChild(markTd);

      document.querySelector(`tbody`).appendChild(row);
    }
  }

  function summarize(ev) {
    const checked = Array.from(
      document.querySelectorAll(`input[type="checkbox"]:checked`)
    )
      .map((box) => box.parentElement.parentElement)
      .map((row) => ({
        name: row.children[1].textContent,
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent),
      }));

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of checked) {
      names.push(item.name);
      total += Number(item.price);
      decFactor += Number(item.decFactor);

      buyArea.textContent = `Bought furniture: ${names.join(
        ", "
      )}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${
        decFactor / names.length
      }`;
    }
  }
}
