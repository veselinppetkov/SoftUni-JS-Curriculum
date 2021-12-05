function solve() {
  document
    .getElementsByClassName(`shopping-cart`)[0]
    .addEventListener("click", onClick);
  document.getElementsByClassName(`checkout`)[0].addEventListener("click", sum);
  let output = document.getElementsByTagName(`textarea`)[0];
  const cart = [];
  output.value = "";

  function onClick(ev) {
    if (
      ev.target.tagName == "BUTTON" &&
      ev.target.classList.contains(`add-product`)
    ) {
      const product = ev.target.parentNode.parentNode;
      const name = product.querySelector(`.product-title`).textContent;
      const price = Number(
        product.querySelector(`.product-line-price`).textContent
      );
      cart.push({
        name,
        price,
      });

      output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }
  }

  function sum() {
    const products = new Set();
    cart.forEach((e) => products.add(e.name));
    const total = cart.reduce((t, c) => t + c.price, 0).toFixed(2);

    output.value += `You bought ${Array.from(products).join(
      ", "
    )} for ${total}.`;
    Array.from(document.querySelectorAll("button")).forEach(
      (el) => (el.disabled = true)
    );
  }
}
